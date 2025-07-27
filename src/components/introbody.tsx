type IntroBodyProps = {
    title: string;
    content: string;
    imageSrc: string;
    altText: string;
    join?: string;         // Make join optional
    whiteBg?: boolean;
}

export default function IntroBody({ title, content, imageSrc, altText, join, whiteBg }: IntroBodyProps) {
    return (
        <>
            <style>{`
                .join-acm-btn {
                    display: inline-block;
                    margin-top: 2rem;
                    padding: 0.8rem 2.2rem;
                    background: #fff;
                    color: rgb(200, 16, 46);
                    border-radius: 8px;
                    font-weight: bold;
                    text-decoration: none;
                    font-size: 1.2rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    transition: background 0.2s, color 0.2s;
                }
                .join-acm-btn:hover {
                    background: #e0e0e0;
                    color: rgb(200, 16, 46);
                }

                .intro-container {
                    width: 100%;
                    max-width: min(90rem, 95vw);
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 3rem;
                    padding: 4rem 3rem;
                    margin: 0 auto;
                }

                .intro-content {
                    flex: 1;
                    text-align: left;
                }

                .intro-title {
                    font-size: 3rem;
                    font-weight: bold;
                    margin: 0;
                }

                .intro-text {
                    font-size: 1.5rem;
                    margin-top: 1.8rem;
                    line-height: 1.5;
                }

                .intro-image {
                    width: 600px;
                    height: auto;
                    border-radius: 8px;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.1);
                    transform: translateY(-25px);
                    flex-shrink: 0;
                }

                /* Tablet and small laptop styles */
                @media (max-width: 1024px) and (min-width: 769px) {
                    .intro-container {
                        max-width: 90vw;
                        gap: 1.5rem;
                        padding: 2.5rem 1rem;
                    }

                    .intro-title {
                        font-size: 2.2rem;
                    }

                    .intro-text {
                        font-size: 1.2rem;
                    }

                    .intro-image {
                        width: 420px;
                        transform: translateY(-15px);
                    }

                    .join-acm-btn {
                        font-size: 1rem;
                        padding: 0.55rem 1.6rem;
                    }
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    .intro-container {
                        flex-direction: column;
                        max-width: 95vw;
                        padding: 2rem 1rem;
                        gap: 1rem;
                    }

                    .intro-content {
                        text-align: left;
                        order: 2;
                    }

                    .intro-image {
                        width: 100%;
                        max-width: 800px;
                        transform: none;
                        order: 1;
                    }

                    .intro-title {
                        font-size: 2rem;
                        text-align: left;
                    }

                    .intro-text {
                        font-size: 1.2rem;
                        margin-top: 1rem;
                    }

                    .join-acm-btn {
                        margin-top: 1.5rem;
                        padding: 0.75rem 1.5rem;
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 480px) {
                    .intro-container {
                        padding: 1.5rem 1rem;
                    }

                    .intro-title {
                        font-size: 1.8rem;
                    }

                    .intro-text {
                        font-size: 1.1rem;
                    }

                    .intro-image {
                        max-width: 500px;
                    }
                }
            `}</style>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2rem",
                    width: "100%",
                    minHeight: "350px",
                    backgroundColor: whiteBg ? "#fff" : "rgb(200, 16, 46)",
                    color: whiteBg ? "#222" : "white",
                    boxSizing: "border-box",
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px"
                }}
            >
                <div className="intro-container">
                    <div className="intro-content">
                        <h2 className="intro-title">{title}</h2>
                        <p className="intro-text">{content}</p>
                        {join && (
                            <a
                                href={join}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="join-acm-btn"
                            >
                                Join ACM
                            </a>
                        )}
                    </div>
                    <img
                        src={imageSrc}
                        alt={altText}
                        className="intro-image"
                    />
                </div>
            </div>
        </>
    );
}