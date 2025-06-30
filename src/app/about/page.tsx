import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import AboutBoard from '../../components/about';
import SectionBody from '@/components/sectionbody';

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
            
                <AboutBoard
                    members={[
                        { name: "Juan Lopez", position: "Chair, SIGwebdev Lead", imageUrl: "board/juan.jpg" },
                        { name: "Douglas Johnson", position: "Vice Chair, SIGmainframe Lead", imageUrl:"board/doug.jpg" },
                        { name: "John White", position: "Secretary", imageUrl:"board/john.jpg" },
                        { name: "Elisabeth Smith", position: "Treasurer", imageUrl:"board/betty.jpg" },
                        { name: "Kurt McMahon", position: "Faculty Advisor", imageUrl: "https://assetsio.gnwcdn.com/digitalfoundry-2021-halo-combat-evolved-season-7-master-chief-collection-1622735120728.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" },
                        { name: "Nathaniel Aguirre", position: "SIGwebdev Officer", imageUrl:"board/nate.jpg" },
                        { name: "Jakobi McFadden", position: "SIGwebdev Officer", imageUrl:"board/jakobi.jpg" },
                        { name: "Julian Carranza", position: "SIGwebdev Officer", imageUrl: "board/julian.jpg" },
                        { name: "Victor Taiwo", position: "ACM Recruiter", imageUrl:"board/victor.jpg" },
                        { name: "Oyewale Adeole", position: "ACM Recruiter", imageUrl: "board/wale.jpg"}

                    ]}
                />

                <div style={{ width: "100%", maxWidth: "80rem", margin: "0 auto" }}>
                <SectionBody
                    title="Speaker Series Fall 2025"
                    content="NIU ACM brings you a series of talks from industry professionals, alumni, and faculty. Below are details of the upcoming talks."
                />
                </div>

                <div style={{ width: "100%", maxWidth: "80rem", margin: "0 auto" }}>
                <SectionBody
                    title="Speaker #1"
                    content=""
                />
                </div>

                <div style={{ width: "100%", maxWidth: "80rem", margin: "0 auto" }}>
                <SectionBody
                    title="Speaker #2"
                    content=""
                />
                </div>

                <div style={{ width: "100%", maxWidth: "80rem", margin: "0 auto" }}>
                <SectionBody
                    title="Speaker #3"
                    content=""
                />
                </div>

            </div>
            <Footer />
        </div>
    );
}