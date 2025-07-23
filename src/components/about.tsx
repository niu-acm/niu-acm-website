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

    return (
        <>
            <style>{`
                .about-container {
                    width: 100%;
                    max-width: 80rem;
                    margin: 2rem auto;
                    padding: 2rem 0;
                    background: #fff;
                    border-radius: 1rem;
                    box-shadow: 0 0.5rem 2rem 0 rgba(60,60,60,0.12), 0 0.15rem 0.6rem 0 rgba(60,60,60,0.10);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .about-title {
                    font-size: 2.8rem;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 0.5rem;
                    letter-spacing: 0.05em;
                }

                .about-description {
                    font-size: 1.2rem;
                    color: #444;
                    text-align: center;
                    margin-bottom: 2rem;
                    max-width: 40rem;
                }

                .members-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 2rem;
                    width: 90%;
                    justify-items: center;
                }

                .member-card {
                    background: #fff;
                    border-radius: 0.8rem;
                    box-shadow: 0 0.13rem 0.5rem rgba(0,0,0,0.10);
                    padding: 1.2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 12rem;
                    max-width: 16rem;
                    width: 100%;
                    min-height: 16rem;
                    height: 100%;
                    justify-content: center;
                    box-sizing: border-box;
                }

                .member-image {
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 1rem;
                }

                .member-placeholder {
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    background: #eee;
                    margin-bottom: 1rem;
                }

                .member-name {
                    font-weight: bold;
                    font-size: 1.1rem;
                    text-align: center;
                }

                .member-position {
                    color: #666;
                    font-size: 0.95rem;
                    margin-top: 0.3rem;
                    text-align: center;
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    .about-container {
                        margin: 1rem auto;
                        padding: 1.5rem 1rem;
                    }

                    .about-title {
                        font-size: 2.2rem;
                    }

                    .about-description {
                        font-size: 1.1rem;
                        margin-bottom: 1.5rem;
                        padding: 0 1rem;
                    }

                    .members-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1.5rem;
                        width: 95%;
                    }

                    .member-card {
                        min-width: 9rem;
                        max-width: 12rem;
                        min-height: 14rem;
                        padding: 1rem;
                    }

                    .member-image,
                    .member-placeholder {
                        width: 4rem;
                        height: 4rem;
                    }

                    .member-name {
                        font-size: 1rem;
                    }

                    .member-position {
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 480px) {
                    .about-container {
                        margin: 0.5rem auto;
                        padding: 1rem 0.5rem;
                    }

                    .about-title {
                        font-size: 1.8rem;
                    }

                    .about-description {
                        font-size: 1rem;
                    }

                    .members-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                        width: 100%;
                    }

                    .member-card {
                        min-width: 8rem;
                        max-width: 12rem;
                        min-height: 12rem;
                        margin: 0 auto;
                    }

                    .member-image,
                    .member-placeholder {
                        width: 3.5rem;
                        height: 3.5rem;
                    }

                    .member-name {
                        font-size: 0.95rem;
                    }

                    .member-position {
                        font-size: 0.85rem;
                    }
                }
            `}</style>
            <div className="about-container">
                <h1 className="about-title">
                    ACM Board
                </h1>
                <div className="about-description">
                    Meet the current ACM board members. 
                    We are dedicated to supporting the NIU computing community 
                    and organizing events, workshops, and opportunities for all students!
                    If you are interested in joining the board email niuacm@mail.niu.edu
                </div>
                <div className="members-grid">
                    {shownMembers.map((member, idx) => (
                        <div key={idx} className="member-card">
                            {member.imageUrl ? (
                                <img
                                    src={member.imageUrl}
                                    alt={member.name || "Board Member"}
                                    className="member-image"
                                />
                            ) : (
                                <div className="member-placeholder" />
                            )}
                            <div className="member-name">
                                {member.name}
                            </div>
                            <div className="member-position">
                                {member.position}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}