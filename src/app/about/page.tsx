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
                        { name: "Juan Lopez", position: "Chair, SIGwebdev Lead", imageUrl: "https://github.com/user-attachments/assets/a8fcffe9-13d1-4ae6-8e17-06787c0d04d0" },
                        { name: "Douglas Johnson", position: "Vice Chair, SIGmainframe Lead", imageUrl:"https://github.com/user-attachments/assets/35d84516-1df5-41a4-96b6-032217b0a1ef" },
                        { name: "John White", position: "Secretary", imageUrl:"https://github.com/user-attachments/assets/cbacee6a-cf39-4196-9246-23e902a4351b" },
                        { name: "Elisabeth Smith", position: "Treasurer", imageUrl:"https://github.com/user-attachments/assets/281a0339-a1de-4651-b461-f17d80638373" },
                        { name: "Kurt McMahon", position: "Faculty Advisor", imageUrl: "https://github.com/user-attachments/assets/ee9b2a42-e63c-46bf-8bb8-99090f6e2862" },
                        { name: "Nathaniel Aguirre", position: "SIGwebdev Officer", imageUrl:"https://github.com/user-attachments/assets/29846ee6-7e52-426f-beb8-03e1f576b502" },
                        { name: "Jakobi McFadden", position: "SIGwebdev Officer", imageUrl:"https://github.com/user-attachments/assets/326e0216-6822-407b-88c5-44bf4a4618ef" },
                        { name: "Julian Carranza", position: "SIGwebdev Officer", imageUrl: "https://github.com/user-attachments/assets/af74b729-f4dd-4a5d-a913-37fce192688a" },
                        { name: "Victor Taiwo", position: "ACM Recruiter", imageUrl:"https://github.com/user-attachments/assets/d63945f7-ee1d-4647-bc3e-754ec015bc58" },
                        { name: "Oyewale Adeoye", position: "ACM Recruiter", imageUrl: "https://github.com/user-attachments/assets/fe7fbea7-bb05-432e-8e1e-b9992437b8f5"}
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