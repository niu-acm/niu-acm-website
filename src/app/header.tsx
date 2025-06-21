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
                    letter-spacing: 1px;
                }
                .header-nav {
                    display: flex;
                    gap: 2rem;
                }
            `}</style>
            <header className="header">
                <div className="header-left">
                    <a href="/">
                        <img src="/images/logos/niu-banner-logo-white-1-1.png" alt="ACM Logo" className="header-logo" />
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