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
            `}</style>
            <div
                style={{
                    display: "flex",
                    flexDirection: flipped ? "row-reverse" : "row",
                    backgroundColor: "white",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    width: "100%",
                    minHeight: "350px",
                    color: "#222",
                    padding: "4rem 6vw",
                    boxSizing: "border-box",
                    margin: "1rem 0",
                    boxShadow: "0 4px 8px 0 rgba(100, 100, 100, 0.5)",
                }}
            >
                {/* Text section */}
                <div style={{
                    flex: 1,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1.2rem",
                    maxWidth: "500px"
                }}>
                    <h2 className="section-title">{title}</h2>
                    <p style={{ fontSize: "1.3rem", margin: 0, whiteSpace: "pre-line" }}>{content}</p>
                    {content2 && <p style={{ fontSize: "1.1rem", margin: 0 }}>{content2}</p>}
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
                <div
                    style={{
                        flex: "0 0 auto",
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem",
                        alignItems: "center",
                        justifyContent: flipped ? "flex-start" : "flex-end"
                    }}
                >
                    {imageSrc && <img src={imageSrc} alt="" style={{ width: "240px", borderRadius: "12px", objectFit: "cover" }} />}
                    {imageSrc2 && <img src={imageSrc2} alt="" style={{ width: "550px", borderRadius: "12px", objectFit: "cover" }} />}    { /* 2 is perfect for single large */}
                    {imageSrc3 && <img src={imageSrc3} alt="" style={{ width: "240px", borderRadius: "12px", objectFit: "cover" }} />}   
                    {imageSrc4 && <img src={imageSrc4} alt="" style={{ width: "400px", borderRadius: "12px", objectFit: "cover" }} />}    {/* 4,5 are perfect for side by side */}
                    {imageSrc5 && <img src={imageSrc5} alt="" style={{ width: "400px", borderRadius: "12px", objectFit: "cover" }} />}
                </div>
            </div>
        </>
    );
}