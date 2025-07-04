import Header from '../components/header';
import Footer from '../components/footer';
import SigCard from '../components/sig_card';
import IntroBody from '../components/introbody';
import SectionBody from '../components/sectionbody';
import Background from '@/components/background';

export default function Home() {
	return (
		<div>
		<Background />
		<Header />

		<div style={{
			backgroundColor: "rgba(0, 0, 0, 0.1)",
			minHeight: "60vh",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",
		}} >
			{/* Intro Section */}
			<IntroBody
				title="NIU's Premier Computer Science Organization"
				content=" NIU ACM is your gateway to hands-on tech experience, career growth, and a community of like-minded students. Join us for workshops, guest speakers, and SIGs (Special Interest Groups) where you can build projects, learn new skills, connect with alumni, and have fun through socials and team events — whether you're just starting out or looking to level up, there's a place for you here."
				imageSrc="https://npr.brightspotcdn.com/e1/7b/9b044d4642d389e499176c5edd69/img-9121.jpg"
				altText="come join acm with me vro. come be deckerpilled"
				join="https://huskiehub.niu.edu/NIUACM/club_signup"
			/>

			<div style={{
				width: "100%",
				maxWidth: "1500px"
			}} >
			{/* Different Section */}
			<SectionBody
				title="Why ACM is Different this year"
				content="NIU's ACM Chapter is expanding to two special interest groups (SIGs) this year:  SIGmainframe and SIGwebdev. ACM also has a new advisor, Kurt McMahon. Our Board
				is more diverse than ever, with a mix of new and returning members. We are the biggest ACM board in NIU history with 10 board members."
				content2="ACM's goal is to provide a welcoming and inclusive environment for all students interested in computer science and finding their niche within the tech industry."
				imageSrc2="https://private-user-images.githubusercontent.com/108855394/462245738-8f1bdde4-ca84-4f74-a254-376c473d1029.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzM4LThmMWJkZGU0LWNhODQtNGY3NC1hMjU0LTM3NmM0NzNkMTAyOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NWMyMGMwZDg0OWY4YjY3NDRlOWY5M2RmNjJlZTY1YmVjOTViNzQwODQ4NGUyZWRjMDc5YmE5NmI1MjI5OGE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RCwvn2AECVOHfOQvLW1lR3jG3iyuQAk4ZQmG0vI9EY8"
			></SectionBody>

			{/* Speaker Section */}
			<SectionBody
				title="ACM Speaker Series Fall 2025"
				content="ACM has Three Speaker Series events planned for Fall 2025.
				These events will feature guest speakers providing their experiences and career pathes.
				Stay tuned for more details on dates and speakers!"
				content2="Free Food and Drinks will be provided at all events"
				imageSrc2="https://media.licdn.com/dms/image/v2/D5622AQHTXFkxkZoaBw/feedshare-shrink_2048_1536/B56ZW1n1DIHEAs-/0/1742508881064?e=1753315200&v=beta&t=MwufZgGVTQT1m7HjUdDoIY4sMZQofpj7USZZKdZD4b8"
				flipped={true}
			></SectionBody>

			{/* Socials Section */}
			<SectionBody
				title="ACM Socials"
				content="ACM hosts a variety of social events throughout the semester to help members connect, relax, and have fun."
				content2="Free food, games, and activities are always included!"
				imageSrc2="https://i.imgur.com/EEu0VvC.jpeg"
			></SectionBody>

			{/* SIG Section */}
			<SectionBody
				title="Special Interest Groups (SIGs)"
				content="SIGs are focused subgroups where members can dive deep 
				into specific areas of tech they're passionate about.
				They’re informal, collaborative spaces that meet regularly to learn, build, and grow together."
				content2="Check out our two SIGs below to see what they’re all about"
				imageSrc="https://private-user-images.githubusercontent.com/108855394/462245728-dee8a6ad-d2a0-4557-a926-bdc1911f9659.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzI4LWRlZThhNmFkLWQyYTAtNDU1Ny1hOTI2LWJkYzE5MTFmOTY1OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MjI3Mjc5ZTk0MThjMTI0OTEzMzFmMzUxYmZjZDMyMzU1NzNmNGUwMzQzODhmYWIzOGE2NTIxMWRkNGNmYzUxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NAEWNSWq7Z6xSqSeRzivFBx4UteIuUHV-rSNN0y3MJ4"
				imageSrc3="https://private-user-images.githubusercontent.com/108855394/462245727-d1e339a0-25b5-479a-8272-f45287020ab8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzI3LWQxZTMzOWEwLTI1YjUtNDc5YS04MjcyLWY0NTI4NzAyMGFiOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZTY4Y2IzYWYwMTdiOTU0NTA5NGFhODEwZWFmMGEyOGIxNDRhNDUzYmRkYTJiYWM1MDllYzZhNDc1YmI3YTI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.VYU0H8QSBokVSzcujSA-ejBuvFNw61wBqbRY8l6ZOUg"
			></SectionBody>

			{/* Sig Cards */}
			<SigCard
				name="SIGmainframe"
				description="SIGmainframe is our deep dive into the world of enterprise computing,
				especially focused on IBM mainframes.
				Whether you're curious about what powers the world’s banking and airline systems,
				or you want to earn IBM Z Developer Badges, this is the SIG for you!"
				image_url="https://private-user-images.githubusercontent.com/108855394/462245730-31ebe18c-ec4c-417e-9a58-d030e6da9edc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1ODc5MDEsIm5iZiI6MTc1MTU4NzYwMSwicGF0aCI6Ii8xMDg4NTUzOTQvNDYyMjQ1NzMwLTMxZWJlMThjLWVjNGMtNDE3ZS05YTU4LWQwMzBlNmRhOWVkYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQwMDA2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNTRlOTgwNWRhNGE3YmVlNTFkMDAyMTBmM2UyYjY5MTMzN2M5ZmNkMjUxNjliMTAwOGZhNDA0NDk2M2RkMzhiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.iT5sLec0RthK5UFwou4KGQlFRnI-ZUwtUTPreW5zZgI"
				flipped={false}
				link="/sigm"
			/>
			<SigCard
				name="SIGwebdev"
				description="SIGwebdev is for anyone interested in building things on the web—from total beginners to experienced devs.
				If you're into HTML/CSS, PHP, React, Tailwind, or just want to make your portfolio shine, this is your space"
				image_url="https://www.hubspot.com/hubfs/web-development.webp"
				flipped={true}
				link="/sigw"
			/>
			</div>
		</div>
		<Footer />
		</div>
	);
}