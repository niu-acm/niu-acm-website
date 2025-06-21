export default function Footer() {
    return (
       <>
        <style>{`
            
            .footer {
               align-items: center;
               justify-content: space-between;

            }
        `}</style>

        <footer className="footer">
            <h1>Connect With Us!</h1>
            <div>
                <a href="mailto:niuhuskiesacm@gmail.com">
                    <img src="https://pixabay.com/images/search/email/" alt="Email Icon"></img>
                </a>
                <a href="mailto:niuhuskiesacm@gmail.com">Send us an Email</a>
            </div>
        </footer>
        </>
    );
}