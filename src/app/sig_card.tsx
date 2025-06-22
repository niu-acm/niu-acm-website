type SigCardProps = {
    name: string;
    description: string;
    image_url: string;
    flipped: boolean;
    link: string;
};

export default function SigCard({
    name,
    description,
    image_url,
    flipped,
    link
}: SigCardProps) {
    if (!flipped) {
        return (
        <>
        <style>{`
            .sig-card {
                display: flex;
                flex-direction: row;
                box-shadow: 0 0.25rem 0.5rem 0 rgba(100, 100, 100, 0.5);
                transition: 0.3s ease;
                border-radius: 0.3125rem;
                border: 2px dark grey;
                margin: 1.5625rem 6.25rem 1.5625rem 6.25rem;
                }

                .sig-card:hover {
                background-color: rgba(0, 0, 0, 0.1);
                transform: scale(1.05);
                box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.4);
                }

            .sig-card-content {
                padding: 0rem 6.25rem 0rem 6.25rem;
                font-size: 1.5625rem;
            }

            .sig-header {
                font-size: 1.875rem;
                margin-bottom: 0.625rem;
                margin-top: 1.875rem;
                color: rgb(200, 16, 46);
            }

            .sig-body {
                font-size: 1.25rem;
                padding: 2.5rem 0rem 2.5rem 0rem;
            }

            .sig-link {
                display: inline-block;
                background: rgb(200, 16, 46);
                color: white;
                padding: 1.875rem;
                border-radius: 0.5rem;
                font-weight: bold;
                text-decoration: none;
                font-size: 1.2rem;
                box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.08);
                transition: background 0.2s, color 0.2s, transform 0.15s;
                margin-bottom: 1.875rem;
            }

            .sig-link:hover {
                background-color: rgb(94, 83, 85);
            }
            `}</style>
            
                <div className="sig-card">
                    <img src={image_url} alt={name} className="sig-card-image"/>
                    <div className="sig-card-content">
                        <h3 className="sig-header"><b>{name}</b></h3>
                        <p className="sig-body">{description}</p>
                        <a className="sig-link" href={link}>Learn More About {name}!</a>
                    </div>
                </div>
        </>
        );
    }
    return (
            <>
                <div className="sig-card">
                    <div className="sig-card-content">
                        <h3 className="sig-header"><b>{name}</b></h3>
                        <p className="sig-body">{description}</p>
                        <a className="sig-link" href={link}>Learn More About {name}!</a>
                    </div>
                    <img src={image_url} alt={name} className="sig-card-image"/>
                </div>
            </>
        );
}