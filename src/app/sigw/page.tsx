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
                    backgroundColor: "none",
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
                    imageSrc="https://cdn.jim-nielsen.com/blog/2021/css-is-awesome-default.png"
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
                        imageSrc="https://www.niutoday.info/wp-content/uploads/2013/08/victor-e-huskie-2.jpg"
                    />

                    {/* Schedule  */}
                    <SectionBody
                        title="Fall 2025 Schedule"
                        content={`Week 1: \nWeek 2: \nWeek 3: \nWeek 4: \nWeek 5: \nWeek 6: \nWeek 7: \nWeek 8: \nWeek 9:   `}
                        content2="Weekly Meetings in Psych CS building from 4:30pm to 6pm"
                        imageSrc="https://i.imgflip.com/2e8ce9.jpg"
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