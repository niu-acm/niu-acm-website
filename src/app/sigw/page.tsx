import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import IntroBody from '../../components/introbody';
import SectionBody from '../../components/sectionbody';

export default function Home() {
    return (
        <div>
            <Background />
            <Header />

            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                {/* Intro Section */}
                <IntroBody
                    title="SIG Web Development"
                    content="SIG webdev is a weekly web development club that meets every Wednesday from 4:30pm-6:00pm in the Psych CS Building,
                    welcoming all skill levels from beginners to experienced developers. 
                    The semester features hands-on workshops covering HTML/CSS, GitHub Pages, React with Vite, 
                    TypeScript, ExpressJS, and SQL. Participants build real projects like personal sites, REST APIs, 
                    and React apps, with guidance tailored to both new and advanced coders."
                    imageSrc="https://www.getmecoding.com/wp-content/uploads/2017/10/GMC_blog_IsWebDevelopmentCoding_resize.jpg"
                    altText="come join acm with me vro. come be deckerpilled"
                    whiteBg={true}
                />

                <div style={{
                    width: "100%",
                    maxWidth: "1500px"
                }}>
                    {/* Example Section */}
                    <SectionBody
                        title="What Type of Events does SIGwebdev Host?"
                        content="SIG webdev focuses on web development skills, hosting workshops on HTML, CSS, JavaScript, TypeScript and popular frameworks. Members learn about web technologies not taught in the classroom."
                        content2="SIG webdev also meets for SQL & Snacks, Study Events, and Movies"
                        imageSrc="nerdsky.jpg"
                        imageSrc3="warsky.png"
                        flipped={true}
                    />

                    {/* Schedule  */}
                    <SectionBody
                        title="Fall 2025 Schedule"
                        content={`
                            Sep 24: Kickoff + Developer Setup + GitHub Pages
                            \nOct 1: One-Stop Web Basics Workshop (HTML/CSS/Dev Tools)
                            \nOct 8: Intro to React + Vite + JSX
                            \nOct 15: TypeScript for Web Dev
                            \nOct 22: Backend with ExpressJS + REST APIs
                            \nOct 29: SQL and Snacks
                            \nNov 5: SEO Optimization & page accessibility workshop
                            \nNov 12: Catch up Workshop & Chill: Leetcode/Hackerrank Practice
                            \nNov 19: Project Showcase + End-of-Semester Party
                            `}
                        content2="Weekly Meetings in Psych CS building from 4:30pm to 6pm"
                    />

                    {/* Past Events */}
                    <SectionBody
                        title="Past Events"
                        content="Coming Soon"
                    />

                    {/* Example Section */}
                    <SectionBody
                        title="Student Highlights"
                        content="This Very Website, More coming soon"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}