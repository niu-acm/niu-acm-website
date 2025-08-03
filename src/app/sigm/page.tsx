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
                    title="SIG Mainframe"
                    content="The Special Interest Group for Mainframe (SIGmainframe) is a new community at NIU dedicated to exploring the world of mainframes, including their history, the technologies that power them, and their relevance in today's computing landscape. Whether you are completely new to the world of mainframes, or have some experience with them, SIGmainframe is a place for you to learn, share, and connect with others who are passionate about this area of computing."
                    imageSrc="https://github.com/user-attachments/assets/e79ee876-ceab-415c-bfbe-68973e6e8efa"
                    altText="i love mainframes and decker equally"
                    whiteBg={true}
                />

                <div style={{
                    width: "100%",
                    maxWidth: "1500px"
                }}>
                    {/* Example Section */}
                    <SectionBody
                        title="What Type of Events does SIGmainframe Host?"
                        content="SIGmainframe will host meetings discussing various topics related to mainframes, including the history of mainframes, specific mainframe technologies, and various mainframe resources to students."
                        content2="Some of the specific technologies that will be discussed include Z/OS, COBOL, JCL, ISPF/TSO, Zowe, and some of the specific resources that will be shown to students include IBM Z Xplore, Interskill Learning, and MVS-TK5."
                        imageSrc="https://github.com/user-attachments/assets/dee8a6ad-d2a0-4557-a926-bdc1911f9659"
                        imageSrc3="https://github.com/user-attachments/assets/10c66b69-d491-466e-a2ad-d54ad51d9b8a"
                        flipped={true}
                    />

                    {/* Schedule  */}
                    <SectionBody
                        title="Fall 2025 Schedule"
                         content={`
                            Sep 23: Byte into the Mainframe: Introduction to Mainframes
                            \nSep 30: Unlocking Mainframe Learning: IBM Z Xplore, Interskill Learning, MVS-TK5
                            \nOct 7: ISPF/TSO vs Zowe: Old School Meets New School
                            \nOct 14: Understanding Z/OS Data Sets: What's the Difference?
                            \nOct 21: Snacks and Studying: Work on Mainframe Certifications, Study for Midterms, or Come Enjoy Free Snacks!
                            \nOct 28: JCL 101: Writing your First Job
                            \nNov 4: COBOL 101: Writing your First COBOL Program
                            \nNov 11: Getting Started with a Mainframe Career: A Student's Perspective
                            \nNov 18: SIGmainframe Semester Sendoff: Games, Snacks, and Fun!
                            `}
                    />

                    {/* Share & TechExchange */}
                    <SectionBody
                        title="Mainframe Conferences"
                        content="NIU Mainframers have started to attend SHARE and TechXChange events throughout the year. These events provide opportunities to learn about the latest mainframe technologies, network with industry professionals, and share knowledge with peers. At SHARE in February 2025, NIU had 17 students attend, including 3 ACM board members. These conferences will be highlighted to students as the opportunities they are, which are great networking opportunities as well as getting a chance to see how professionals use mainframes in their careers, and hear about work that mainframers are doing in the real world."
                        imageSrc4="https://github.com/user-attachments/assets/e97a945e-955e-4fe4-9885-6e8185de4d01"
                        imageSrc5="https://github.com/user-attachments/assets/907cf5e5-f53d-40fe-b1c0-96f585bb7c3d"
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