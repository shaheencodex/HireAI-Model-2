import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { EventInput } from "@fullcalendar/core";

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<EventInput[]>([
    {
      title: "Product demo",
      start: "2025-10-24T16:00:00",
      end: "2025-10-24T17:00:00",
      backgroundColor: "#3788d8",
    },
    {
      title: "Deep work",
      start: "2025-10-23T14:30:00",
      end: "2025-10-23T16:30:00",
      backgroundColor: "#2ecc71",
    },
    {
      title: "Lunch with team",
      start: "2025-10-24T17:30:00",
      end: "2025-10-24T18:30:00",
      backgroundColor: "#28b485",
    },
  ]);

  const handleDateClick = (arg: any) => {
    const title = prompt("Enter event title:");
    if (title) {
      const newEvent: EventInput = {
        title,
        start: arg.date,
        end: new Date(arg.date.getTime() + 60 * 60 * 1000), // 1 hour duration
        backgroundColor: "#125756",
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (arg: any) => {
    if (window.confirm(`Delete event '${arg.event.title}'?`)) {
      arg.event.remove();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Calendar</h1>
        <button
          onClick={() => {
            const title = prompt("Enter event title:");
            if (title) {
              const newEvent: EventInput = {
                title,
                start: new Date(),
                end: new Date(new Date().getTime() + 60 * 60 * 1000),
                backgroundColor: "#125756",
              };
              setEvents([...events, newEvent]);
            }
          }}
          className="px-4 py-2 bg-[#01a982] text-white rounded-lg hover:bg-[#01a982]/80 transition-colors"
        >
          Add Event
        </button>
      </div>

      <div className="bg-[#292d3a] rounded-lg shadow p-6">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          height="auto"
          contentHeight="auto"
          aspectRatio={2}
          expandRows={true}
          handleWindowResize={true}
          stickyHeaderDates={true}
          themeSystem="standard"
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: "09:00",
            endTime: "17:00",
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
