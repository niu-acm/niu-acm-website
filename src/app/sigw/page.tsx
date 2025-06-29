import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import IntroBody from '../../components/introbody';
import SectionBody from '../../components/sectionbody';
import SigCard from '../../components/sig_card'; // If you want to use SigCard

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
                        title="What Type of Events does SIGwebdev Host?"
                        content="NIU's ACM Chapter is expanding to two special interest groups (SIGs) this year:  SIGmainrame and SIGwebdev. ACM also has a new advisor, Kurt McMahon. Our Board is more diverse than ever, with a mix of new and returning members. We are the biggest ACM board in NIU history with 9 board members."
                        content2="ACM's goal is to provide a welcoming and inclusive environment for all students interested in computer science and finding their niche within the tech industry."
                        imageSrc="https://i.imgflip.com/2e8ce9.jpg"
                    />

                {/* Schedule  */}
                    <SectionBody
                        title="Fall 2025 Schedule"
                        content="NIU's ACM Chapter is expanding to two special interest groups (SIGs) this year:  SIGmainrame and SIGwebdev. ACM also has a new advisor, Kurt McMahon. Our Board is more diverse than ever, with a mix of new and returning members. We are the biggest ACM board in NIU history with 9 board members."
                        content2="ACM's goal is to provide a welcoming and inclusive environment for all students interested in computer science and finding their niche within the tech industry."
                        imageSrc="https://i.imgflip.com/2e8ce9.jpg"
                    />

                    {/* Past Events */}
                    <SectionBody
                        title="Past Events"
                        content="NIU's ACM Chapter is expanding to two special interest groups (SIGs) this year:  SIGmainrame and SIGwebdev. ACM also has a new advisor, Kurt McMahon. Our Board is more diverse than ever, with a mix of new and returning members. We are the biggest ACM board in NIU history with 9 board members."
                        content2="ACM's goal is to provide a welcoming and inclusive environment for all students interested in computer science and finding their niche within the tech industry."
                        imageSrc="https://i.imgflip.com/2e8ce9.jpg"
                    />

                    {/* Example Section */}
                    <SectionBody
                        title="Student Highlights"
                        content="NIU's ACM Chapter is expanding to two special interest groups (SIGs) this year:  SIGmainrame and SIGwebdev. ACM also has a new advisor, Kurt McMahon. Our Board is more diverse than ever, with a mix of new and returning members. We are the biggest ACM board in NIU history with 9 board members."
                        content2="ACM's goal is to provide a welcoming and inclusive environment for all students interested in computer science and finding their niche within the tech industry."
                        imageSrc="https://i.imgflip.com/2e8ce9.jpg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}