type SigCardProps = {
    name: string;
    description: string;
    image_url: string;
    flipped?: boolean; // Optional prop to indicate if the card should be flipped
};



export default function SigCard({
    name,
    description,
    image_url,
    flipped
}: SigCardProps) {
    if (!flipped) {
        return (
        <>
            <style>{`
              .sig-card {
                   display: flex;
                   flex-direction: row;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   transition: 0.3s ease;
                   border-radius: 5px;
                   border: 2px solid black;
                   margin: 25px 100px 25px 100px;
                }

                .sig-card:hover {
                   background-color: rgba(0, 0, 0, 0.1);
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
                   padding: 50px 0px 100px 0px;
              }

            
            `}</style>
                <div className="sig-card">
                    <img src={image_url} alt={name} className="sig-card-image"/>
                    <div className="sig-card-content">
                        <h3 className="sig-header"><b>{name}</b></h3>
                        <p className="sig-body">{description}</p>
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
                    </div>
                    <img src={image_url} alt={name} className="sig-card-image"/>
                </div>
            </>
        );
}