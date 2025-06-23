'use client';

import { useEffect, useRef } from "react";
import p5 from "p5";

const Background: React.FC = () => {
    const canvasContainer = useRef<HTMLDivElement>(null);
    const sketchInstance = useRef<p5 | null>(null);

    useEffect(() => {
        let p5Instance: p5 | null = null;

        const createSketch = async () => {
            const p5 = (await import("p5")).default;

            const sketch = (p: p5) => {
                type Cursor = {
                    x: number;
                    y: number;

                    max_segments: number;
                    segment_number: number;
                    segment_length: number;
                    left_side: boolean;
                    original_x: number;
                    original_y: number;

                    dx: number;
                    dy: number;
                    speed: number;
                    level: number;
                    
                    segments: Array<Segment>;
                };
                type Segment = {
                    x_0: number;
                    y_0: number;
                    x_1: number;
                    y_1: number;
                };

                const niu_red = [200, 16, 46];
                const toAddCursors: Array<Cursor> = [];
                const cursors: Array<Cursor> = [];
                const cursor_count = 50;

                p.setup = () => {
                    p.createCanvas(p.windowWidth, p.windowHeight);
                    p.noStroke();

                    for (let i = 0; i < cursor_count; i++) {
                        const x = i % 2 === 0 ? 0 : p.width;
                        const y = p.random(p.height);
                        toAddCursors.push({
                            x: x,
                            y: y,

                            max_segments: p.random(3, 5),
                            segment_number: 0,
                            segment_length: p.random(3, 5),
                            left_side: i % 2 === 0,
                            original_x: x,
                            original_y: y,

                            dx: i % 2 === 1 ? -1 : 1,
                            dy: 0,
                            speed: p.random(2, 12),
                            level: p.random(1, 3),

                            segments: [],
                        });
                    }

                    toAddCursors.sort((a, b) => a.y - b.y);
                };

                p.draw = () => {
                    p.background('white');

                    // Every frame, add 5 new cursor
                    if (toAddCursors.length > 0) {
                        for (let i = 0; i < 5 && toAddCursors.length > 0; i++) {
                            cursors.push(toAddCursors.shift()!);
                        }
                    }
                    
                    for (const cursor of cursors) {
                        const breath_offset = 10 * Math.sin(p.frameCount / (cursor.level * 500 / cursor.speed));
                        const dist_from_mouse_offset = 200 / (p.dist(
                            p.mouseX,
                            p.mouseY,
                            cursor.x,
                            cursor.y
                        ) + 25);
                        const offset_total = dist_from_mouse_offset + breath_offset;

                        // Draw the segments
                        p.stroke(niu_red);
                        for (const segment of cursor.segments) {
                            p.strokeWeight(2);
                            p.line(segment.x_0, segment.y_0 + offset_total, segment.x_1, segment.y_1 + offset_total);
                        };

                        // Draw the current segment
                        p.strokeWeight(2);
                        p.stroke(niu_red);
                        p.line(cursor.original_x, cursor.original_y + offset_total, cursor.x, cursor.y + offset_total);

                        // Draw the dot
                        p.fill(niu_red);
                        p.noStroke();
                        p.ellipse(cursor.x, cursor.y + offset_total, 10, 10);

                        if ( cursor.segment_number >= cursor.max_segments ) {
                            continue;
                        }
                
                        cursor.segment_length -= 1;
                        cursor.x += cursor.dx * cursor.speed;
                        cursor.y += cursor.dy * cursor.speed;

                        // Move in the current direction, depleting
                        //  the segment length
                        if (cursor.segment_length <= 0) {
                            // Create a new segment
                            cursor.segments.push({
                                x_0: cursor.original_x,
                                y_0: cursor.original_y,
                                x_1: cursor.x,
                                y_1: cursor.y,
                            });

                            // Reset segment length and increment segment number
                            cursor.segment_length = p.random(20, 50);
                            cursor.segment_number++;
                            cursor.original_x = cursor.x;
                            cursor.original_y = cursor.y;
                            cursor.segment_length = p.random(20, 50) / (cursor.segment_number + 2);

                            // If the segment is odd, go up or down randomly, and
                            //  if the segment is even, go left or right according to
                            //  the left_side property
                            if (cursor.segment_number % 2 === 1) {
                                cursor.dy = p.random(-1, 1) > 0 ? 1 : -1;
                                cursor.dx = 0;
                            } else {
                                cursor.dx = cursor.left_side ? 1 : -1;
                                cursor.dy = 0;
                            }
                        }
                    }
                };

                p.windowResized = () => {
                    p.resizeCanvas(p.windowWidth, p.windowHeight);
                };
            };

            if (canvasContainer.current) {
                p5Instance = new p5(sketch, canvasContainer.current);
                sketchInstance.current = p5Instance;
            }
        };

        createSketch();

        return () => {
            if (sketchInstance.current) {
                sketchInstance.current.remove();
                sketchInstance.current = null;
            }
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
            <div
                ref={canvasContainer}
                className="background-canvas"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: "100vw",
                    height: "100vh",
                    pointerEvents: "none",
                }}
            />
        </>
    );
};

export default Background;
