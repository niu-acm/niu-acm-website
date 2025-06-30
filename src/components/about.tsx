type BoardMember = {
    name?: string;
    position?: string;
    imageUrl?: string;
};

//// This component displays the ACM board members in a grid layout.
type AboutBoardProps = {
    members: BoardMember[];
};

export default function AboutBoard({ members }: AboutBoardProps) {
    // Remove the slice and just use all members
    const shownMembers = members;

    // Calculate columns: up to 5, but never more than the number of members (unless members > 5)
    const columns = Math.min(5, shownMembers.length || 1);
    // Calculate rows: enough to fit all members
    const rows = Math.ceil(shownMembers.length / columns);

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "80rem",
                margin: "2rem auto",
                padding: "2rem 0",
                background: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 0.5rem 2rem 0 rgba(60,60,60,0.12), 0 0.15rem 0.6rem 0 rgba(60,60,60,0.10)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1 style={{
                fontSize: "2.8rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "0.5rem",
                letterSpacing: "0.05em"
            }}>
                ACM Board
            </h1>
            <div
                style={{
                    fontSize: "1.2rem",
                    color: "#444",
                    textAlign: "center",
                    marginBottom: "2rem",
                    maxWidth: "40rem"
                }}
            >
                Meet the current ACM board members. 
                We are dedicated to supporting the NIU computing community 
                and organizing events, workshops, and opportunities for all students!
                If you are interested in joining the board email niuacm@mail.niu.edu
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gap: "2rem",
                    width: "90%",
                    justifyItems: "center",
                }}
            >
                {shownMembers.map((member, idx) => (
                    <div key={idx} style={{
                        background: "#fff",
                        borderRadius: "0.8rem",
                        boxShadow: "0 0.13rem 0.5rem rgba(0,0,0,0.10)",
                        padding: "1.2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: "12rem",
                        maxWidth: "16rem",
                        width: "100%",
                        minHeight: "16rem",
                        height: "100%",
                        justifyContent: "center",
                        boxSizing: "border-box"
                    }}>
                        {member.imageUrl ? (
                            <img
                                src={member.imageUrl}
                                alt={member.name || "Board Member"}
                                style={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    marginBottom: "1rem"
                                }}
                            />
                        ) : (
                            <div style={{
                                width: "5rem",
                                height: "5rem",
                                borderRadius: "50%",
                                background: "#eee",
                                marginBottom: "1rem"
                            }} />
                        )}
                        <div style={{ fontWeight: "bold", fontSize: "1.1rem", textAlign: "center" }}>
                            {member.name}
                        </div>
                        <div style={{ color: "#666", fontSize: "0.95rem", marginTop: "0.3rem", textAlign: "center" }}>
                            {member.position}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}