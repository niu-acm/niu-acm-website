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
                background: none;
                border: none;
                color: white;
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

            .icon-button p {
                margin: 0;
                font-weight: bold;
            }

            /* Mobile styles */
            @media (max-width: 768px) {
                .icon-button {
                    padding: 8px 15px;
                    gap: 6px;
                }

                .icons {
                    height: 25px;
                }

                .icon-button p {
                    font-size: 14px;
                }
            }

            @media (max-width: 480px) {
                .icon-button {
                    padding: 6px 10px;
                    gap: 4px;
                }

                .icons {
                    height: 20px;
                }

                .icon-button p {
                    font-size: 12px;
                }
            }

            /* Firefox mobile specific optimizations */
            @-moz-document url-prefix() {
                @media (max-width: 768px) {
                    .icon-button {
                        padding: 6px 12px;
                        gap: 5px;
                    }

                    .icons {
                        height: 22px;
                    }

                    .icon-button p {
                        font-size: 13px;
                        line-height: 1.2;
                    }
                }

                @media (max-width: 480px) {
                    .icon-button {
                        padding: 4px 8px;
                        gap: 3px;
                    }

                    .icons {
                        height: 18px;
                    }

                    .icon-button p {
                        font-size: 11px;
                        line-height: 1.1;
                    }
                }
            }

        `}</style>

        <a href={link}>
            <button className="icon-button">
                <img className="icons" src={iconPath} alt={iconName + " icon"} ></img>
                <p>{iconName}</p>
            </button>
        </a>
        </>
    );
}