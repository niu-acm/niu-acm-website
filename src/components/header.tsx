import Link from "next/link";

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

                .header-nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    font-weight: 500;
                    padding: 0.5rem 1.2rem;
                    border-radius: 8px;
                    transition: background 0.2s, color 0.2s, transform 0.15s, box-shadow 0.2s;
                }

                .header-nav a:hover {
                    background: rgb(189, 19, 50);
                    color: #fff;
                    transform: scale(1.07);
                    box-shadow: 0 4px 16px rgba(0,0,0,0.16);
                }
                    
            `}</style>
            <header className="header">
                <div className="header-left">
                    <Link href="/">
                        <img src="/images/logos/niu-updated-logo.png" alt="ACM Logo" className="header-logo" />
                    </Link>
                    <span className="header-title">Northern Illinois ACM</span>
                </div>
                <nav className="header-nav">
                    <Link href="/about">About</Link>
                    <Link href="/cal">Calendar</Link>
                    <Link href="/sigm">SIGmainframe</Link>
                    <Link href="/sigw">SIGwebdev</Link>
                    <Link href="/resc">Resources</Link>
                </nav>
            </header>
        </>
    );
}