type SectionBodyProps = {
    title: string;
    content: string;
    content2?: string;
    imageSrc: string;
    imageSrc2?: string;
    imageSrc3?: string;
    lightGrey?: boolean; 
}

export default function SectionBody({ title, content, content2, imageSrc, imageSrc2, imageSrc3, lightGrey }: SectionBodyProps) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                width: "100%",
                minHeight: "350px",
                backgroundColor: lightGrey ? "#f5f5f5" : "#fff", // Use light grey if prop is true
                color: "#222",
                padding: "3rem 6vw",
                boxSizing: "border-box",
                margin: "1rem 0",
            }}
        >
            {/* All text on left */}
            <div style={{ flex: 1, textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
                <h2 style={{ fontSize: "2.4rem", fontWeight: "bold", margin: 0 }}>{title}</h2>
                <p style={{ fontSize: "1.3rem", margin: 0 }}>{content}</p>
                {content2 && <p style={{ fontSize: "1.1rem", margin: 0 }}>{content2}</p>}
            </div>
            {/* All Images on right */}
            <div style={{ flex: 1, display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center", justifyContent: "flex-end" }}>
                {imageSrc && <img src={imageSrc} alt="" style={{ width: "100%", maxWidth: "250px", borderRadius: "8px", objectFit: "cover" }} />}
                {imageSrc2 && <img src={imageSrc2} alt="" style={{ width: "100%", maxWidth: "250px", borderRadius: "8px", objectFit: "cover" }} />}
                {imageSrc3 && <img src={imageSrc3} alt="" style={{ width: "100%", maxWidth: "250px", borderRadius: "8px", objectFit: "cover" }} />}
            </div>
        </div>
    );
}