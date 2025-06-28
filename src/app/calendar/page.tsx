'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ICAL from 'ical.js';

export default function Home() {
	const [events, setEvents] = useState([] as any[]);

	useEffect(() => {
		async function loadICS() {
		}

		loadICS();
	}, []);

	return (
		<>
		<style>
			
		</style>
		<div>
			<Background />
			<Header />

			<div
			style={{
				backgroundColor: "none",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
			}}
			>
			<div 
				style={{
				width: '60%',
				margin: '0 auto',
				background: "white"
				}}
			>
				<FullCalendar
				plugins={[dayGridPlugin]}
				initialView='dayGridMonth'
				weekends={true}
				events={{
					url: 'https://huskiehub.niu.edu/ics?uid=3043b56d-f57c-11ef-a5a0-0afff28bcb11&type=group&eid=b02f85ed69b64e0aa51b2cc3686aaf59',
					format: 'ics'
				}}
				eventContent={renderEventContent}
				height="80vh"
				/>
			</div>
			</div>

			<Footer />
		</div>
		</>
	);
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </>
  );
}
