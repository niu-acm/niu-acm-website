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
                    title="NIU's Premier Computer Science Organization"
                    content="NIU ACM is your gateway to hands-on tech experience, career growth, and a community of like-minded students. Join us for workshops, guest speakers, and SIGs (Special Interest Groups) where you can build projects, learn new skills, connect with alumni, and have fun through socials and team events — whether you're just starting out or looking to level up, there's a place for you here."
                    imageSrc="https://npr.brightspotcdn.com/e1/7b/9b044d4642d389e499176c5edd69/img-9121.jpg"
                    altText="come join acm with me vro. come be deckerpilled"
                    whiteBg={true}
                />

                <div style={{
                    width: "100%",
                    maxWidth: "1500px"
                }}>
                    {/* Example Section */}
                    <SectionBody
                        title="What Type of Events does SIGmainframe Host?"
                        content=""
                        content2=""
                        imageSrc="https://i.imgflip.com/2e8ce9.jpg"
                        flipped={true}
                    />

                    {/* Schedule  */}
                    <SectionBody
                        title="Fall 2025 Schedule"
                         content={`
                            Sep 23: 
                            \nSep 30:
                            \nOct 7:
                            \nOct 14: 
                            \nOct 21: 
                            \nOct 28: 
                            \nNov 4: 
                            \nNov 11: 
                            \nNov 18: 
                            `}
                    />

                    {/* Share & TechExchange */}
                    <SectionBody
                        title="Mainframe Conferences"
                        content="NIU Mainframers often attend SHARE and TechXChange events throughout the year. These events provide opportunities to learn about the latest mainframe technologies, network with industry professionals, and share knowledge with peers."
                        imageSrc4="https://private-user-images.githubusercontent.com/108855394/462245741-907cf5e5-f53d-40fe-b1c0-96f585bb7c3d.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE2MDIyMzIsIm5iZiI6MTc1MTYwMTkzMiwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzQxLTkwN2NmNWU1LWY1M2QtNDBmZS1iMWMwLTk2ZjU4NWJiN2MzZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwNDA1MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NDE4OWEwZGM3YTFjMmZiNWI5MzkxNjZiMzE2OTIwNTk2OTM4OWEzZDA0MGRiZmNjNDFlMTYxOWQ2ZTI0YjExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.416beqIiD02IpkRjFsWKYGAiji_jCu9ncNEOwpeQcWE"
                        imageSrc5="https://media.licdn.com/dms/image/v2/D5622AQHgkZLYjmnzcQ/feedshare-shrink_2048_1536/B56ZVOjV5YGQAo-/0/1740779648248?e=1753920000&v=beta&t=OnTGbIB13VoiW7Ye8BCFk4mLVbE4oRB9TEPVRKlbvSM"
                    />

                    {/* Past Events */}
                    <SectionBody
                        title="Past Events"
                        content=""
                    /> 

                    {/* Example Section */}
                    <SectionBody
                        title="Mainframe Alumni"
                        content=""
                        imageSrc="https://i.imgflip.com/2e8ce9.jpg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}