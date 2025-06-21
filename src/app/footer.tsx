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
        `}</style>

        <footer className="footer">
            <div className="icons-wrapper">
                <FooterIcon iconName="Email Us" link="mailto:niuhuskiesacm@gmail.com" iconPath="icons/mail.svg"/>
                <FooterIcon iconName="Discord" link="https://discord.gg/gzQDaQMGjJ" iconPath="icons/brand-discord.svg"/>
                <FooterIcon iconName="Huskie Hub" link="https://huskiehub.niu.edu/NIUACM/club_signup" iconPath="icons/heading.svg"/>
                <FooterIcon iconName="GitHub" link="https://github.com/niu-acm" iconPath="icons/brand-github.svg"/>
                <FooterIcon iconName="LinkedIn" link="https://www.linkedin.com/groups/14721661" iconPath="icons/brand-linkedin.svg"/>
            </div>
        </footer>
        </>
    );
}