'use client'

import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { fr } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { fr };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function MyCalendar() {
  const [evenements] = useState([
    {
      title: "Mathématiques - Salle A2",
      start: new Date(2025, 9, 21, 8, 0),
      end: new Date(2025, 9, 21, 10, 0),
      type: "Cours",
      enseignant: "Pr. Ndongo",
      description: "Cours d’introduction aux équations différentielles.",
    },
    {
      title: "TP Informatique - Salle B5",
      start: new Date(2025, 9, 21, 10, 30),
      end: new Date(2025, 9, 21, 12, 30),
      type: "TP",
      enseignant: "Mme. Nkou",
      description: "Programmation en Python : boucles et conditions.",
    },
    {
      title: "Contrôle Continu - Physique",
      start: new Date(2025, 9, 22, 14, 0),
      end: new Date(2025, 9, 22, 16, 0),
      type: "CC",
      enseignant: "Dr. Kamdem",
      description: "Évaluation sur les lois du mouvement de Newton.",
    },
    {
      title: "Cours d’Anglais - Salle C3",
      start: new Date(2025, 9, 23, 9, 0),
      end: new Date(2025, 9, 23, 11, 0),
      type: "Cours",
      enseignant: "Mr. John Smith",
      description: "Compréhension orale et vocabulaire technique.",
    },
  ]);

  // 🎨 Couleur selon le type de séance
  const eventStyleGetter = (event) => {
    let backgroundColor;
    switch (event.type) {
      case "Cours":
        backgroundColor = "#007bff";
        break;
      case "TP":
        backgroundColor = "#28a745";
        break;
      case "CC":
        backgroundColor = "#ffc107";
        break;
      case "SN":
        backgroundColor = "#dc3545";
        break;
      default:
        backgroundColor = "#6c757d";
    }

    return {
      style: {
        backgroundColor,
        color: "white",
        borderRadius: "5px",
        padding: "5px",
        border: "none",
      },
    };
  };

  // 🧾 Fonction appelée quand on clique sur un événement
  const handleSelectEvent = (event) => {
    alert(
      `📘 ${event.title}\n👨‍🏫 Enseignant : ${event.enseignant}\n📝 Description : ${event.description}`
    );
  };

  return (
    <div style={{ height: "90vh", padding: "5px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        📅 Mon Emploi du Temps
      </h2>
      <Calendar
        localizer={localizer}
        events={evenements}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, borderRadius: "10px" }}
        eventPropGetter={eventStyleGetter}
        views={["month", "week", "day"]}
        defaultView="week"
        onSelectEvent={handleSelectEvent}
        messages={{
          next: "Suivant",
          previous: "Précédent",
          today: "Aujourd’hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
        }}
      />
    </div>
  );
}
