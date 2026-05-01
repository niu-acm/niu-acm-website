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
                    title="ACM Workshops"
                    content="ACM is hosting workshops this semester to help students develop practical skills in various areas of computer science. 
                    These workshops cover topics such as web development, mainframe technologies, cybersecurity, and more. They are designed to provide hands-on experience and complement the 
                    theoretical knowledge gained in the classroom. Workshops are typically led by knowledgeable students and offer a great opportunity for attendees to learn new technologies, 
                    work on projects, and network with peers who share similar interests."
                    imageSrc="https://github.com/user-attachments/assets/d1e339a0-25b5-479a-8272-f45287020ab8"
                    altText="come join acm with me vro. come be deckerpilled"
                    whiteBg={false}
                />

                <div style={{
                    width: "100%",
           
                }}>
                    {/**/}
                    <SectionBody
                        title="SIGwebdev Workshops"
                        content="SIGwebdev focuses on web development skills, hosting workshops on HTML, CSS, JavaScript, TypeScript and popular frameworks. Members learn about web technologies not taught in the classroom."
                        content2="Technologies covered include HTML, CSS, JavaScript, TypeScript, React, Vite, ExpressJS, SQL"
                        link={{ url: "https://github.com/niu-acm/SIGwebdev", text: "Past Workshops and Guides" }}
                        link2={{ url: "https://juanlopezcs.com/", text: "Past student website example" }}
                        link3={{ url: "https://natestech.site/", text: "Past student website example" }}
                        imageSrc2="https://www.getmecoding.com/wp-content/uploads/2017/10/GMC_blog_IsWebDevelopmentCoding_resize.jpg"
                        flipped={true}
                    />

                    {/**/}
                    <SectionBody
                        title="SIGmainframe Workshops"
                        content="SIGmainframe focuses on mainframe technologies, hosting workshops on COBOL, JCL, DB2, and other mainframe tools."
                        content2="Technologies covered include COBOL, JCL, DB2, CICS, and more"
                        link={{ url: "https://github.com/niu-acm/SIGmainframe", text: "Past Workshops and Guides" }}
                        imageSrc2="https://github.com/user-attachments/assets/ceebea3e-a14b-45f4-935a-038838a86837"
                        flipped={true}
                    />

                    {/* Schedule  */}
                    <SectionBody
                        title="Fall 2026 Workshop Schedule"
                        content={`       
                            TBA
                            `}
                        content2="Meetings held in Psych CS building"
                    />

                </div>
            </div>
            <Footer />
        </div>
    );
}