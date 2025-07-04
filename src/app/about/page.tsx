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
                        { name: "Juan Lopez", position: "Chair, SIGwebdev Lead", imageUrl: "https://private-user-images.githubusercontent.com/108855394/462245733-a8fcffe9-13d1-4ae6-8e17-06787c0d04d0.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzMzLWE4ZmNmZmU5LTEzZDEtNGFlNi04ZTE3LTA2Nzg3YzBkMDRkMC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYmI5M2E2YjRkOGY0NzVkOGVkNDc1ODQzNmRiMGE4MDI0Njc0YWY2MmM5YmYzZTg5MjVhZjMyZWEyZGY2YjY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.uKn4o5KCFafFUVVEwXFpvKpOQw93MvKvXy48EKwbkMI" },
                        { name: "Douglas Johnson", position: "Vice Chair, SIGmainframe Lead", imageUrl:"https://private-user-images.githubusercontent.com/108855394/462245726-35d84516-1df5-41a4-96b6-032217b0a1ef.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzI2LTM1ZDg0NTE2LTFkZjUtNDFhNC05NmI2LTAzMjIxN2IwYTFlZi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lODg4YzhiYjMzZjA2NjM4ZDI0ZWJmNzI5MjlhYTc5MWRkMGIwY2Y4ZDgxNjIwN2ExMjUwN2ZlMDRmOGNmMjI5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6O2u8rNvFCaqFq9LXfophNN8W63Up5HOlLEDbEQkxtU" },
                        { name: "John White", position: "Secretary", imageUrl:"https://private-user-images.githubusercontent.com/108855394/462245732-cbacee6a-cf39-4196-9246-23e902a4351b.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzMyLWNiYWNlZTZhLWNmMzktNDE5Ni05MjQ2LTIzZTkwMmE0MzUxYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kY2I0NDkwOTYyMTRlODM4NWI5MzJkMmJjNzM1ZjNhZjY1YmRkNTMyYzdhOWUyNzlmMDExMzk2NTRmZDM3MTg2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hGJ3bTSlKYeAqs9VOHr4e5w1t5Nl-CsQjVPQxeAz808" },
                        { name: "Elisabeth Smith", position: "Treasurer", imageUrl:"https://private-user-images.githubusercontent.com/108855394/462245725-281a0339-a1de-4651-b461-f17d80638373.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzI1LTI4MWEwMzM5LWExZGUtNDY1MS1iNDYxLWYxN2Q4MDYzODM3My5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lODVhODA1ODE5NDQ1OTM0MWRiZWE4Y2VjYTkzMDFjNjg4ZTRlMDYzYTg1YWNhZTFmODVkY2ZkYWY5YzQ0NzVmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rCYT0-npL1TP0mA6qR9anOP_3dF9NTRUsnON2pIalw4" },
                        { name: "Kurt McMahon", position: "Faculty Advisor", imageUrl: "https://assetsio.gnwcdn.com/digitalfoundry-2021-halo-combat-evolved-season-7-master-chief-collection-1622735120728.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" },
                        { name: "Nathaniel Aguirre", position: "SIGwebdev Officer", imageUrl:"https://private-user-images.githubusercontent.com/108855394/462245736-29846ee6-7e52-426f-beb8-03e1f576b502.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzM2LTI5ODQ2ZWU2LTdlNTItNDI2Zi1iZWI4LTAzZTFmNTc2YjUwMi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMDg5YjA0MDQ0NzQ5OTQzMDM1YWMxNTk0N2NiYjhjNGFhNjE5YjFkMjQ5NzVlOWM0ZjBlMzI2MmNhZTUyZDE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9KfodbPRR9OTDdYZMoCtfVqs7kpjUE3LcpHKAoWHyMo" },
                        { name: "Jakobi McFadden", position: "SIGwebdev Officer", imageUrl:"https://private-user-images.githubusercontent.com/108855394/462245731-326e0216-6822-407b-88c5-44bf4a4618ef.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzMxLTMyNmUwMjE2LTY4MjItNDA3Yi04OGM1LTQ0YmY0YTQ2MThlZi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNTZmNjRhOWY2ZDQwOTU4NDc5MzFiY2UzNjM1ZWMxYzBhMmEzZDgyZjlkYzk4MDI1MTgwNGVlM2RlY2QxODQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.yyEhcg8048wgWKe4DtYuacEkdtL-FT3s0gccqYVk7C4" },
                        { name: "Julian Carranza", position: "SIGwebdev Officer", imageUrl: "https://private-user-images.githubusercontent.com/108855394/462245734-af74b729-f4dd-4a5d-a913-37fce192688a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzM0LWFmNzRiNzI5LWY0ZGQtNGE1ZC1hOTEzLTM3ZmNlMTkyNjg4YS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02Zjk2NTMxMTJkZmIyMmE3YWYxOTYwN2UzMDIxNTNhMzJjZjEwMjBmOTM3ZWE1M2IwOWZiZWNiN2JmNmY3NWNmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BDgmW4GuUOhszgG3q7gLKVwkMBHba1VowYo4epas_Go" },
                        { name: "Victor Taiwo", position: "ACM Recruiter", imageUrl:"https://private-user-images.githubusercontent.com/108855394/462245746-d63945f7-ee1d-4647-bc3e-754ec015bc58.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzQ2LWQ2Mzk0NWY3LWVlMWQtNDY0Ny1iYzNlLTc1NGVjMDE1YmM1OC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MWU4MDAyZGEyMDg0Mjk5OWY5M2VmNGVlMWNlZDAwNjNhNGM3MmRmMTc5MzgzNDEwZTBhY2ZiZGM1NDcyYWYyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gN1E02naxaZfHeDfF1ngfrlM8Td4moaJwHB7Jhbi-YY" },
                        { name: "Oyewale Adeoye", position: "ACM Recruiter", imageUrl: "https://private-user-images.githubusercontent.com/108855394/462245720-fe7fbea7-bb05-432e-8e1e-b9992437b8f5.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzIwLWZlN2ZiZWE3LWJiMDUtNDMyZS04ZTFlLWI5OTkyNDM3YjhmNS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NjdkMmVjYjZhOTFiYTE5MjY4NTY5ZmJiMjczODU2YmVjOGNlNzdmZjRmMWIyYTlhY2RmMDdiNTE0Y2FmMmMzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XXaOdInW6hFENf8i4DjbHRhKXAmv44w33qrpbho-zEo"}
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