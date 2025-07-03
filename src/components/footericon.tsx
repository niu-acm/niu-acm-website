type FooterIconProps = {
    iconName: string;
    link: string;
    iconPath: string;
};

export default function FooterIcon({
    iconName,
    link,
    iconPath
}: FooterIconProps) {
    return (
        <>
        <style>{`

            .icon-button {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px;
                padding: 10px 20px 10px 20px;
                border-radius: 10px;
            }

            .icons {
                height: 30px;
                width: auto;
                color: white;
                -webkit-filter: invert(100%);
            }

            .icon-button:hover {
                background-color: rgba(0, 0, 0, 0.1);
                cursor: pointer;
                transition: background-color 0.25s ease-in-out;
            }

        `}</style>

        <a href={link}>
            <button className="icon-button">
                <img className="icons" src={iconPath} alt={iconName + " icon"} ></img>
                <p><b>{iconName}</b></p>
            </button>
        </a>
        </>
    );
}