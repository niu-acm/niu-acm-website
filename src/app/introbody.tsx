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
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "2rem",
                width: "100%",
                minHeight: "350rem",
                backgroundColor: "rgb(200, 16, 46)",
                color: "white",
                padding: "1rem 6vw",
                boxSizing: "border-box",
                borderBottomLeftRadius: "24rem",
                borderBottomRightRadius: "24rem"
            }}
        >
            <div style={{ flex: 1, textAlign: "left" }}>
                <h2 style={{ fontSize: "2.8rem", fontWeight: "bold", margin: 0 }}>{title}</h2>
                <p style={{ fontSize: "1.5rem", marginTop: "2rem" }}>{content}</p>
               {join && (
    <>  
        {/* BUTTON */}
        <style>{`       
            .join-acm-btn {
                display: inline-block;
                margin-top: 2rem;
                padding: 0.75rem 2rem;
                background: #fff;
                color: rgb(200, 16, 46);
                border-radius: 8rem;
                font-weight: bold;
                text-decoration: none;
                font-size: 1.2rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                transition: background 0.2s, color 0.2s, transform 0.15s;
            }
            .join-acm-btn:hover {
                background: rgb(94, 83, 85);
                color: #fff;
                transform: scale(1.07);
                box-shadow: 0 4rem 16rem rgba(0,0,0,0.16);
            }
        `}</style>
        <a
            href={join}
            target="_blank"
            rel="noopener noreferrer"
            className="join-acm-btn"
        >
            Join ACM
        </a>
    </>
)}
            </div>
            <img
                src={imageSrc}
                alt={altText}
                style={{
                    width: "600rem",
                    height: "auto",
                    borderRadius: "8rem",
                    boxShadow: "0 4rem 24rem rgba(0,0,0,0.1)",
                    transform: "translateY(-30px)"
                }}
            />
        </div>
    );
}