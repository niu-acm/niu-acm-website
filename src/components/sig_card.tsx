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
                    background-color: white;
                   display: flex;
                   flex-direction: row;
                   box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.5);
                   transition: 0.3s ease;
                   border-radius: 5px;
                   border: 2px dark grey;
                   margin: 25px 100px 25px 100px;
                }

                .sig-card:hover {
                   background-color: rgba(230);
                   transform: scale(1.05);
                   box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.4);
                }

              .sig-card-content {
                   padding: 0px 100px 0px 100px;
                   font-size: 25px;
              }

              .sig-header {
                   font-size: 30px;
                   margin-bottom: 10px;
                   margin-top: 30px;
                   color: rgb(200, 16, 46);
              }

              .sig-body {
                   font-size: 20px;
                   padding: 40px 0px 40px 0px;
              }

              .sig-link {
                   display: inline-block;
                   background: rgb(200, 16, 46);
                   color: white;
                   padding: 30px;
                   border-radius: 8px;
                   font-weight: bold;
                   text-decoration: none;
                   font-size: 1.2rem;
                   box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                   transition: background 0.2s, color 0.2s, transform 0.15s;
                   margin-bottom: 30px;
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