type SigCardProps = {
    name: string;
    description: string;
    image_url: string;
    flipped?: boolean; // Optional prop to indicate if the card should be flipped
};
export default function SigCard({
    name,
    description,
    image_url
}: SigCardProps) {
    return (
        <div className="sig-card">
            {/* hello juan. i am evil. */}
            {/* also, if you want to interpolate a `variable`, use `{variable}` syntax. */}
            {/* let's be react components vro :wilted_rose: */}
        </div>
    );
}