type SectionBodyProps = {
    title: string;
    content: string;
    content2?: string;
    imageSrc?: string;
    imageSrc2?: string;
    imageSrc3?: string;
    imageSrc4?: string;
    imageSrc5?: string;
    link?: { url: string; text: string };
    link2?: { url: string; text: string };
    link3?: { url: string; text: string };
    link4?: { url: string; text: string };
    link5?: { url: string; text: string };
    link6?: { url: string; text: string };
    link7?: { url: string; text: string };
    flipped?: boolean;
}

export default function SectionBody({
    title, content, content2, imageSrc, imageSrc2, imageSrc3, imageSrc4, imageSrc5,
    link, link2, link3, link4, link5, link6, link7, flipped
}: SectionBodyProps) {
    return (
        <>
            <style>{`
                .section-title {
                    font-size: 2.4rem;
                    font-weight: bold;
                    margin: 0;
                    transition: color 0.2s, text-shadow 0.2s, transform 0.2s;
                    cursor: pointer;
                }
                .section-title:hover {
                    color: #c8102e;
                    text-shadow: 0 2px 12px #c8102e44;
                    transform: scale(1.07);
                }
                .section-link {
                    display: inline-block;
                    margin-top: 1.2rem;
                    margin-right: 1rem;
                    padding: 0.6rem 1.5rem;
                    background: #c8102e;
                    color: #fff;
                    border-radius: 8px;
                    font-weight: bold;
                    text-decoration: none;
                    font-size: 1.1rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    transition: background 0.2s, color 0.2s;
                }
                .section-link:hover {
                    background: #a00b23;
                    color: #fff;
                }

                .section-container {
                    display: flex;
                    flex-direction: row;
                    background-color: white;
                    justify-content: space-between;
                    gap: 0.5rem;
                    width: 100%;
                    min-height: 350px;
                    color: #222;
                    padding: 4rem 6vw;
                    box-sizing: border-box;
                    margin: 1rem 0;
                    box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.5);
                }

                .section-flipped {
                    flex-direction: row-reverse;
                }

                .section-text {
                    flex: 1;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1.2rem;
                    max-width: 500px;
                }

                .section-content {
                    font-size: 1.3rem;
                    margin: 0;
                    white-space: pre-line;
                }

                .section-content2 {
                    font-size: 1.1rem;
                    margin: 0;
                }

                .section-images {
                    flex: 0 0 auto;
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    align-items: center;
                    justify-content: flex-end;
                }

                .section-images.flipped {
                    justify-content: flex-start;
                }

                .section-image-small {
                    width: 240px;
                    border-radius: 12px;
                    object-fit: cover;
                }

                .section-image-large {
                    width: 550px;
                    border-radius: 12px;
                    object-fit: cover;
                }

                .section-image-medium {
                    width: 400px;
                    border-radius: 12px;
                    object-fit: cover;
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    .section-container {
                        flex-direction: column;
                        padding: 2rem 1rem;
                        gap: 1.5rem;
                        min-height: auto;
                    }

                    .section-flipped {
                        flex-direction: column;
                    }

                    .section-text {
                        max-width: 100%;
                        text-align: left;
                        order: 2;
                    }

                    .section-images {
                        order: 1;
                        justify-content: flex-start;
                        flex-wrap: wrap;
                    }

                    .section-images.flipped {
                        order: 1;
                        justify-content: flex-start;
                    }

                    .section-title {
                        font-size: 2rem;
                        text-align: left;
                    }

                    .section-content {
                        font-size: 1.1rem;
                    }

                    .section-content2 {
                        font-size: 1rem;
                    }

                    .section-image-small,
                    .section-image-large,
                    .section-image-medium {
                        width: 100%;
                        max-width: 350px;
                    }

                    .section-link {
                        margin-top: 1rem;
                        margin-right: 0.5rem;
                        margin-bottom: 0.5rem;
                        padding: 0.6rem 1.2rem;
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .section-container {
                        padding: 1.5rem 1rem;
                        margin: 0.5rem 0;
                    }

                    .section-title {
                        font-size: 1.8rem;
                    }

                    .section-content {
                        font-size: 1rem;
                    }

                    .section-image-small,
                    .section-image-large,
                    .section-image-medium {
                        max-width: 280px;
                    }

                    .section-link {
                        padding: 0.5rem 1rem;
                        font-size: 0.9rem;
                    }
                }
            `}</style>
            <div className={`section-container ${flipped ? 'section-flipped' : ''}`}>
                {/* Text section */}
                <div className="section-text">
                    <h2 className="section-title">{title}</h2>
                    <p className="section-content">{content}</p>
                    {content2 && <p className="section-content2">{content2}</p>}
                    <div>
                        {link && (
                            <a href={link.url} className="section-link" target="_blank" rel="noopener noreferrer">
                                {link.text}
                            </a>
                        )}
                        {link2 && (
                            <a href={link2.url} className="section-link" target="_blank" rel="noopener noreferrer">
                                {link2.text}
                            </a>
                        )}
                        {link3 && (
                            <a href={link3.url} className="section-link" target="_blank" rel="noopener noreferrer">
                                {link3.text}
                            </a>
                        )}
                        {link4 && (
                            <a href={link4.url} className="section-link" target="_blank" rel="noopener noreferrer">
                                {link4.text}
                            </a>
                        )}
                        {link5 && (
                            <a href={link5.url} className="section-link" target="_blank" rel="noopener noreferrer">
                                {link5.text}
                            </a>
                        )}
                        {link6 && (
                            <a href={link6.url} className="section-link" target="_blank" rel="noopener noreferrer">
                                {link6.text}
                            </a>
                        )}
                        {link7 && (
                            <a href={link7.url} className="section-link" target="_blank" rel="noopener noreferrer">
                                {link7.text}
                            </a>
                        )}
                    </div>
                </div>
                {/* Image section */}
                <div className={`section-images ${flipped ? 'flipped' : ''}`}>
                    {imageSrc && <img src={imageSrc} alt="" className="section-image-small" />}
                    {imageSrc2 && <img src={imageSrc2} alt="" className="section-image-large" />}
                    {imageSrc3 && <img src={imageSrc3} alt="" className="section-image-small" />}
                    {imageSrc4 && <img src={imageSrc4} alt="" className="section-image-medium" />}
                    {imageSrc5 && <img src={imageSrc5} alt="" className="section-image-medium" />}
                </div>
            </div>
        </>
    );
}