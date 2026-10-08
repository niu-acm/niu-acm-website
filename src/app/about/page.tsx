import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import AboutBoard from '../../components/about';

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
                        { name: "Brett Williams", position: "Chair", imageUrl: "" },
                        { name: "Jared Fleck", position: "Vice Chair", imageUrl: "" },
                        { name: "Antonio Ibarra", position: "Treasurer", imageUrl:"" },
                        { name: "Emmett O'Callaghan", position: "Secretary", imageUrl: "https://github.com/user-attachments/assets/86161224-d3d7-47f9-bee5-d347b7417cf7"},
                        { name: "Jared Fleck", position: "SIG/Workshop Lead Officer", imageUrl:"" },  
                        { name: "Jon Lehuta", position: "Faculty Advisor", imageUrl: "" },                   
                     ]}
                    />  
            </div>

               <Footer />
        </div>
    );
}