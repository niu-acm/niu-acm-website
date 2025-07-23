'use client';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventContentArg } from '@fullcalendar/core/index.js';
export default function Home() {
	return (
		<div>
			<style>{`
				.calendar-container {
					background-color: rgba(0, 0, 0, 0.1);
					min-height: 100vh;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					text-align: center;
					padding: 2rem 1rem;
				}

				.calendar-wrapper {
					width: 60%;
					margin: 0 auto;
					background: white;
					border-radius: 8px;
					padding: 1rem;
					box-shadow: 0 4px 8px rgba(0,0,0,0.1);
				}

				.calendar {
					height: 80vh;
				}

				/* Mobile styles */
				@media (max-width: 768px) {
					.calendar-container {
						padding: 1rem 0.5rem;
					}

					.calendar-wrapper {
						width: 95%;
						padding: 0.5rem;
					}

					.calendar {
						height: 45vh;
					}
				}

				@media (max-width: 480px) {
					.calendar-container {
						padding: 0.5rem 0.25rem;
					}

					.calendar-wrapper {
						width: 98%;
						padding: 0.25rem;
					}

					.calendar {
						height: 40vh;
					}
				}
			`}</style>
			<Background />
			<Header />

			<div className="calendar-container">
				<div className="calendar-wrapper">
					<div className="calendar">
						<FullCalendar
						plugins={[dayGridPlugin]}
						initialView='dayGridMonth'
						weekends={true}
						events={{
							url: 'https://huskiehub.niu.edu/ics?uid=3043b56d-f57c-11ef-a5a0-0afff28bcb11&type=group&eid=b02f85ed69b64e0aa51b2cc3686aaf59',
							format: 'ics'
						}}
						eventContent={renderEventContent}
						height="100%"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>
      <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </>
  );
}
