import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import SectionBody from '@/components/sectionbody';

export default function Home() {
    return (
        <>
            <Header />
            <Background />

            <SectionBody
                title="Industry Speakers"
                content="ACM at NIU regularly hosts talks from industry professionals in the technology field. These speakers share their insights, experiences, and knowledge on various topics related to computer science and technology. Past speakers have included software engineers, data scientists, cybersecurity experts, and tech entrepreneurs. These events provide valuable learning opportunities for students and help them stay updated with the latest trends in the tech industry."
                imageSrc2="https://github.com/user-attachments/assets/f64f5d13-134c-43d9-97ae-4daa162c6629"
                />

            <SectionBody
                title="October 2nd: Michael Minella, Director of Spring-Boot (Broadcom)"
                content="Michael Minella is an engineer, Java Champion, speaker, & author with over 21 years of enterprise development experience.
                 He has been a member of the Spring OSS team for over 11 years and currently serves as the Director responsible 
                 for Spring R&D. Formerly he lead the Spring Batch project and was the founder of the Spring Cloud Task project. 
                 Michael has spoken on topics that include Java and Spring & is a JavaOne Rockstar. He was a member of the expert 
                 group for JSR-352 (java batch processing) & is a committer on the Jakarata EE JBatch project. Michael is the author 
                 of The Definitive Guide to Spring Batch and the regular curmudgeon on the podcast OffHeap"
                imageSrc2="https://github.com/user-attachments/assets/5a10c948-b46c-4df8-beb7-654f56b03393"
            />

            <SectionBody
                title="October 16th: Marianne Guieb, Senior Energy Acquisition Specialist at ComEd"
                content="Power systems are changing fast, and computer science is a part of it. Join NIU Electrical Engineering Alumna Marianne Guieb from ComEd as she 
                explains how the electric grid has evolved over the past two decades and how new technology is reshaping the energy industry.
                This talk will explore how computer scientists contribute to innovations in data analytics, automation, and cybersecurity for critical infrastructure.
                Learn how your skills in computing can help modernize one of the most important systems in the world and create new technology jobs in the process.
                Come to gain insight and make connections that could spark your next career direction."
                imageSrc2="https://github.com/user-attachments/assets/d8693b04-10dd-462e-9c7f-cf3c6ec06915"
            />

            <SectionBody
                title="November 20th: Johnn Carr, Middleware Services Practice Manager at TxMQ"
                content="a highly experienced professional with more than 30 years of experience in IT industry, and a 2024 IBM Champion in the Automation category. 
                He is currently employed as a Principal Program Manager for Middleware Services at TxMQ, Inc. John boasts a wealth of experience in high-volume message processing, transformation, 
                and enrichment using IBM MQ on IBM i, z/OS, and distributed systems, as well as in digital transformation initiatives such as App Connect Enterprise and z/OS Connect. 
                He takes great pride in advocating for IBM products, particularly IBM MQ, which he has come to admire for its versatility and continuous learning opportunities across 
                various platforms and configurations."
                imageSrc2="https://github.com/user-attachments/assets/5470faea-83b0-4611-85aa-becde085b60a"
            />

            <Footer />
        </>
    );
}
