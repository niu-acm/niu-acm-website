type IntroBodyProps = {
    title: string;
    content: string;
    imageSrc: string;
    altText: string;
}

export default function IntroBody({ title, content, imageSrc, altText }: IntroBodyProps) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                width: "100vw", 
                minHeight: "350px", 
                backgroundColor: "rgb(200, 16, 46)",
                color: "white",
                padding: "3rem 6vw",
                boxSizing: "border-box",
            }}
        >
            <div style={{ flex: 1, textAlign: "left" }}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <img
                src={imageSrc}
                alt={altText}
                style={{
                    width: "600px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.1)"
                }}
            />
        </div>
    );
}