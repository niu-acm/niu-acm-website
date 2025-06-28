type IntroBodyProps = {
    title: string;
    content: string;
    imageSrc: string;
    altText: string;
    join: string;
}

export default function IntroBody({ title, content, imageSrc, altText, join}: IntroBodyProps) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                width: "100%",
                minHeight: "350px",
                backgroundColor: "rgb(200, 16, 46)",
                color: "white",
                boxSizing: "border-box",
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px"
            }}
        >
            <div style={{
                width: "100%",
                maxWidth: "1500px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "2rem",
                padding: "4rem 0rem"
            }} >
                <div style={{ flex: 1, textAlign: "left" }}>
                    <h2 style={{ fontSize: "2.8rem", fontWeight: "bold", margin: 0 }}>{title}</h2>
                    <p style={{ fontSize: "1.5rem", marginTop: "2rem" }}>{content}</p>
                    {join && (
                        <a
                            href={join}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                marginTop: "2rem",
                                padding: "0.75rem 2rem",
                                background: "#fff",
                                color: "rgb(200, 16, 46)",
                                borderRadius: "8px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "1.2rem",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                            }}
                        >
                            Join ACM
                        </a>
                    )}
                </div>
                <img
                    src={imageSrc}
                    alt={altText}
                    style={{
                        width: "600px",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                        transform: "translateY(-30px)"
                    }}
                />
            </div>
        </div>
    );
}