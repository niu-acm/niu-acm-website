'use client';

import { useEffect, useRef } from "react";

const Background: React.FC = () => {
    const canvasContainer = useRef<HTMLDivElement>(null);
    const sketchInstance = useRef<any>(null); // temporarily 'any' to avoid type issue from dynamic import

    useEffect(() => {
        let p5Instance: any = null;

        const createSketch = async () => {
            const p5 = (await import("p5")).default;

            const sketch = (p: any) => {
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
                    
                    segments: Array<Segment>;
                };
                type Segment = {
                    x_0: number;
                    y_0: number;
                    x_1: number;
                    y_1: number;
                };

                let niu_red = [200, 16, 46];
                let toAddCursors: Array<Cursor> = [];
                let cursors: Array<Cursor> = [];
                const cursor_count = 50;

                p.setup = () => {
                    p.createCanvas(p.windowWidth, p.windowHeight);
                    p.noStroke();

                    for (let i = 0; i < cursor_count; i++) {
                        let x = i % 2 === 0 ? 0 : p.width;
                        let y = p.random(p.height);
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
                    
                    for (let cursor of cursors) {
                        // Draw the segments
                        p.stroke(niu_red);
                        for (let segment of cursor.segments) {
                            p.strokeWeight(2);
                            p.line(segment.x_0, segment.y_0, segment.x_1, segment.y_1);
                        };

                        // Draw the current segment
                        p.strokeWeight(2);
                        p.stroke(niu_red);
                        p.line(cursor.original_x, cursor.original_y, cursor.x, cursor.y);

                        // Draw the dot
                        p.fill(niu_red);
                        p.noStroke();
                        p.ellipse(cursor.x, cursor.y, 10, 10);

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
