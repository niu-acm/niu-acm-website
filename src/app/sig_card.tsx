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
    return (
        <div className={`sig-card${flipped ? ' flipped' : ''}>`}>
            <img src={image_url} alt={name} className="sig-card-image"/>
            <div className="sig-card-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}