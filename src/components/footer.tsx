import FooterIcon from './footericon';

export default function Footer() {
    return (
       <>
        <style>{`
            .footer {
               display: flex;
               align-items: center;
               justify-content: center;
               background-color:rgb(200, 16, 46);
               color: white;
               border-radius: 10px 10px 0px 0px;
               flex-direction: row;
            }

            .icons-wrapper {
               display: flex;
               flex-direction: row;
               gap: 50px;
               margin-top: 15px;
               margin-bottom: 15px;
            }

            /* Mobile styles */
            @media (max-width: 768px) {
                .footer {
                    min-height: auto;
                }

                .icons-wrapper {
                    gap: 30px;
                    margin-top: 12px;
                    margin-bottom: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }

            @media (max-width: 480px) {
                .footer {
                    padding: 0 10px;
                    min-height: auto;
                }

                .icons-wrapper {
                    gap: 20px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
            }

            /* Firefox mobile specific optimizations */
            @-moz-document url-prefix() {
                @media (max-width: 768px) {
                    .footer {
                        padding: 5px 10px;
                    }

                    .icons-wrapper {
                        margin-top: 8px;
                        margin-bottom: 8px;
                        gap: 25px;
                    }
                }

                @media (max-width: 480px) {
                    .footer {
                        padding: 3px 8px;
                    }

                    .icons-wrapper {
                        margin-top: 6px;
                        margin-bottom: 6px;
                        gap: 15px;
                    }
                }
            }
        `}</style>

        <footer className="footer">
            <div className="icons-wrapper">
                <FooterIcon iconName="Email Us" link="mailto:niuhuskiesacm@gmail.com" iconPath="/icons/mail.svg"/>
                <FooterIcon iconName="Discord" link="https://discord.gg/gzQDaQMGjJ" iconPath="/icons/brand-discord.svg"/>
                <FooterIcon iconName="Huskie Hub" link="https://huskiehub.niu.edu/NIUACM/club_signup" iconPath="/icons/heading.svg"/>
                <FooterIcon iconName="GitHub" link="https://github.com/niu-acm" iconPath="/icons/brand-github.svg"/>
                <FooterIcon iconName="LinkedIn" link="https://www.linkedin.com/groups/14721661" iconPath="/icons/brand-linkedin.svg"/>
            </div>
        </footer>
        </>
    );
}