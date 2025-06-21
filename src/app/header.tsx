export default function Header() {
    return (
        <>
            <style>{`
                .header {
                    width: 100%;
                    padding: 4rem 3rem;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color:rgb(200, 16, 46);
                    color: white;

                .header-logo {
                    height: 90px;
                }

                .header-nav {
                    display: flex;
                    gap: 2rem;
                    
                }
            `}</style>
            <header className="header">
                <a href="/">
                    <img src="/acmlogo.png" alt="ACM Logo" className="header-logo" />
                </a>
                <nav className="header-nav">
                    <a href="/about">About</a>
                    <a href="/cal">Calendar</a>
                    <a href="/sigm">SIGmainframe</a>
                    <a href="/sigw">SIGwebdev</a>
                    <a href="/resc">Resources</a>
                </nav>
            </header>
        </>
    );
}