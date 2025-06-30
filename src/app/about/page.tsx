import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';

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
                {/* You can try to re-use code but make one or two new components for this page */}

                {/*  Small text section talking about ACM's board and mission  */}

                {/*  Board positions, give each a name, title, and picture, make up to 15 (5x3) slots */}

                {/*  Speaker section to show 3 speakers */}

                {/* Give each speaker a name, title, and picture, make up to 3 slots */}

            </div>

            <Footer />
        </div>
    );
}