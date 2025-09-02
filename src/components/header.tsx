"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <style>{`
                .header {
                    width: 100%;
                    padding: 1rem 2.5rem;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: rgb(200, 16, 46);
                    color: white;
                    position: relative;
                }
                .header-container {
                    width: 100%;
                    max-width: 150rem;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .header-logo {
                    height: 75px;
                }

                .header-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .header-nav {
                    display: flex;
                    gap: 0.2rem;
                }

                .header-nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 1rem;
                    font-weight: 500;
                    padding: 0.3rem 0.8rem;
                    border-radius: 4px;
                    transition: background 0.2s, color 0.2s, transform 0.15s, box-shadow 0.2s;
                }

                .header-nav a:hover {
                    background: rgb(189, 19, 50);
                    color: #fff;
                    transform: scale(1.07);
                    box-shadow: 0 4px 16px rgba(0,0,0,0.16);
                }

                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                }

                .mobile-nav {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: rgb(200, 16, 46);
                    flex-direction: column;
                    padding: 1rem 0;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                    z-index: 1000;
                }

                .mobile-nav.open {
                    display: flex;
                }

                .mobile-nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 0.7rem;
                    font-weight: 500;
                    padding: 0.6rem 1.5rem;
                    transition: background 0.2s;
                }

                .mobile-nav a:hover {
                    background: rgba(0, 0, 0, 0.1);
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    .header {
                        padding: 1rem 1.5rem;
                    }

                    .header-title {
                        font-size: 1.5rem;
                    }

                    .header-logo {
                        height: 60px;
                    }

                    .header-left {
                        gap: 1rem;
                    }

                    .header-nav {
                        display: none;
                    }

                    .mobile-menu-button {
                        display: block;
                    }
                }

                @media (max-width: 480px) {
                    .header {
                        padding: 1rem;
                    }

                    .header-title {
                        font-size: 1.2rem;
                    }

                    .header-logo {
                        height: 50px;
                    }

                    .header-left {
                        gap: 0.5rem;
                    }
                }
                    
            `}</style>
            <header className="header">
                <div className="header-container">
                    <div className="header-left">
                        <Link href="/">
                            <img src="https://github.com/user-attachments/assets/6a468ee4-ade4-42f7-8d71-6b02d1dde42a"
                            alt="ACM Logo" className="header-logo" />
                        </Link>
                        <span className="header-title">Northern Illinois ACM</span>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="header-nav">
                        <Link href="/about">About</Link>
                        <Link href="/speakers">Speakers</Link>
                        <Link href="/calendar">Calendar</Link>
                        <Link href="/sigm">SIGmainframe</Link>
                        <Link href="/sigw">SIGwebdev</Link>
                        <Link href="/sponsors">Sponsors</Link>
                        <Link href="/resources">Resources</Link>
                        
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="mobile-menu-button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/speakers" onClick={() => setMobileMenuOpen(false)}>Speakers</Link>
                    <Link href="/calendar" onClick={() => setMobileMenuOpen(false)}>Calendar</Link>
                    <Link href="/sigm" onClick={() => setMobileMenuOpen(false)}>SIGmainframe</Link>
                    <Link href="/sigw" onClick={() => setMobileMenuOpen(false)}>SIGwebdev</Link>
                    <Link href="/sponsors" onClick={() => setMobileMenuOpen(false)}>Sponsors</Link>
                    <Link href="/resources" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
                </nav>
            </header>
        </>
    );
}