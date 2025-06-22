export default function Header() {
    return (
        <>
            <style>{`

                .header {
                    width: 100%;
                    padding: 2rem 7.5rem;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: rgb(200, 16, 46);
                    color: white;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .header-logo {
                    height: 150px;
                }

                .header-title {
                    font-size: 2rem;
                    font-weight: bold;
                    letter-spacing: 1rem;
                }

                .header-nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    font-weight: 500;
                    padding: 0.5rem 1.2rem;
                    border-radius: 8rem;
                    transition: background 0.2s, color 0.2s, transform 0.15s, box-shadow 0.2s;
                }

                .header-nav a:hover {
                    background: rgb(189, 19, 50);
                    color: #fff;
                    transform: scale(1.07);
                    box-shadow: 0 4prem 16prem rgba(0,0,0,0.16);
                }
                    
            `}</style>
            <header className="header">
                <div className="header-left">
                    <a href="/">
                        <img src="/images/logos/niu-updated-logo.png" alt="ACM Logo" className="header-logo" />
                    </a>
                    <span className="header-title">Northern Illinois ACM</span>
                </div>
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