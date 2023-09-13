export type Talk = {
  date: Date
  event: string
  title: string
  type: "talk" | "interview"
  location: string
  link: string | null
}

const talks: Talk[] = [
  {
    date: new Date(2022, 8, 5),
    event: "Learnn Talks Roma",
    title: "Q & A",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2022, 8, 12),
    event: "Learnn Talks Milano",
    title: "Q & A con il team",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2023, 4, 28),
    event: "Learnn Offline",
    title: "Strategia Tecnologica: istruzioni per l'uso",
    type: "talk",
    location: "Milan",
    link: "https://learnn.com/lezione/3968/",
  },
  {
    date: new Date(2023, 8, 28),
    event: "React JS Milano Meetup",
    title:
      "Streaming Video: Dal Backend al Frontend con AWS, React e React Native",
    type: "talk",
    location: "Milan",
    link: "https://www.meetup.com/it-IT/react-js-milano/",
  },
  {
    date: new Date(2023, 9, 24),
    event: "Codemotion Conference",
    title:
      "From Zero to 100,000 users: How to Build a Scalable Video Streaming Service",
    type: "talk",
    location: "Milan",
    link: "https://conferences.codemotion.com/milan2023-live/",
  },
]

export default talks
