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
                        imageSrc4="https://github.com/user-attachments/assets/e97a945e-955e-4fe4-9885-6e8185de4d01"
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