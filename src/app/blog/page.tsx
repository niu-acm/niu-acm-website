import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import SectionBody from '@/components/sectionbody';

export default function Home() {
    return (
        <div>
            <Background />
            <Header />

            <SectionBody
                title=" 📌 5/3/2026: Rest in Peace, Kurt McMahon"
                content="Kurt wasn't just an instructor, no one at this university is just an instructor. However, not many opened themselves up the way he did. He was a beloved member of a community he had served for over half his life. He will be greatly missed by the NIU Computer Science community and beyond. Rest in peace, Kurt."
                imageSrc2="https://github.com/user-attachments/assets/ee9b2a42-e63c-46bf-8bb8-99090f6e2862"
            />
            <SectionBody
                title="4/28/2026: New NIU CS Discord Server"
                content="There is a new NIU CS Discord server! Join to stay up to date with the latest news and events in the NIU Computer Science community, connect with fellow students, and get help with your CS courses. Whether you're looking for study groups, project collaborators, or just want to chat about all things computer science, our Discord server is the place to be. Click the link below to join and be a part of our vibrant CS community!"
                link={{ url: "https://discord.gg/2RcV89CKZS", text: "New NIU CS Discord" }}
                imageSrc2="https://github.com/user-attachments/assets/ce4e93df-a30f-4ad8-8534-a7e672ab1861"
            />
            <SectionBody
                title="4/26/2026: Blogs launched"
                content="Look at this picture of Tux in Team Fortress 2"
                imageSrc2="https://github.com/user-attachments/assets/723c417a-54a9-4c77-8880-21b2523c1970"
            />
          
            <Footer />
        </div>
    );
}