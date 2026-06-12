// Fake data for the AbleSpace web-app UI kit. Not production data.
window.AS_DATA = {
  user: { name: "Dana Whitfield", role: "Speech-Language Pathologist", initials: "DW" },
  today: "Thursday, March 19",
  stats: {
    goalsOnTrack: 87,
    minutesLogged: 312,
    minutesTarget: 420,
    sessionsToday: 5,
    dataPoints: 1204,
  },
  schedule: [
    { time: "9:00",  student: "Maya R.",   service: "Speech · 30 min", room: "Rm 12", status: "done" },
    { time: "9:45",  student: "Eli T.",    service: "Speech · 30 min", room: "Rm 4",  status: "done" },
    { time: "11:00", student: "Aaliyah J.",service: "Group · 45 min",  room: "Library", status: "now" },
    { time: "1:15",  student: "Noah B.",   service: "Speech · 30 min", room: "Rm 9",  status: "upcoming" },
    { time: "2:00",  student: "Priya S.",  service: "Eval · 60 min",   room: "Rm 3",  status: "upcoming" },
  ],
  students: [
    {
      id: "maya", name: "Maya Rodriguez", grade: "Grade 3", initials: "MR",
      disability: "Speech/Language", reviewIn: 21, status: "on-track",
      goals: [
        { id: "g1", area: "Articulation", text: "Produce /r/ in initial position with 80% accuracy across 3 sessions", progress: 86, trend: "up", type: "Frequency", baseline: 42, target: 80, last: "Today" },
        { id: "g2", area: "Language", text: "Use 4–5 word sentences to request during structured play", progress: 64, trend: "up", type: "Frequency", baseline: 30, target: 75, last: "Yesterday" },
        { id: "g3", area: "Fluency", text: "Use easy-onset strategy during 3-minute conversation", progress: 48, trend: "flat", type: "Duration", baseline: 20, target: 70, last: "2 days ago" },
      ],
    },
    {
      id: "eli", name: "Eli Thompson", grade: "Grade 5", initials: "ET",
      disability: "Autism Spectrum", reviewIn: 7, status: "watch",
      goals: [
        { id: "g4", area: "Social", text: "Initiate a greeting with a peer in 4 of 5 opportunities", progress: 52, trend: "up", type: "Frequency", baseline: 15, target: 80, last: "Today" },
        { id: "g5", area: "Self-Reg", text: "Use a coping strategy when frustrated with 70% independence", progress: 38, trend: "down", type: "Frequency", baseline: 25, target: 70, last: "3 days ago" },
      ],
    },
    {
      id: "aaliyah", name: "Aaliyah Jones", grade: "Grade 2", initials: "AJ",
      disability: "Specific Learning", reviewIn: 45, status: "on-track",
      goals: [
        { id: "g6", area: "Reading", text: "Decode CVC words with 90% accuracy", progress: 91, trend: "up", type: "Percentage", baseline: 50, target: 90, last: "Today" },
        { id: "g7", area: "Writing", text: "Write a complete sentence with capital and period", progress: 72, trend: "up", type: "Rubric", baseline: 40, target: 85, last: "Yesterday" },
      ],
    },
    {
      id: "noah", name: "Noah Brooks", grade: "Grade 4", initials: "NB",
      disability: "Speech/Language", reviewIn: 14, status: "on-track",
      goals: [
        { id: "g8", area: "Articulation", text: "Produce /s/ blends in sentences with 85% accuracy", progress: 79, trend: "up", type: "Frequency", baseline: 45, target: 85, last: "Today" },
      ],
    },
    {
      id: "priya", name: "Priya Singh", grade: "Grade 1", initials: "PS",
      disability: "Developmental Delay", reviewIn: 3, status: "review-due",
      goals: [
        { id: "g9", area: "Language", text: "Follow 2-step directions with 80% accuracy", progress: 58, trend: "flat", type: "Frequency", baseline: 30, target: 80, last: "Yesterday" },
      ],
    },
  ],
  // 8-session trial sparkline-ish series for the detail chart (percent accuracy)
  series: [42, 51, 49, 58, 63, 71, 78, 86],
};
