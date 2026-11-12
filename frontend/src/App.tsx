import './App.css'

import { useState } from 'react'


type ReportKind = "bug" | "feature";
type Priority = 'new' | 'urgent' | 'high' | 'medium' | 'low'

type Report = {
  id: string;
  text: string;
  kind: ReportKind;
  priority: Priority;
}

function App() {

  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug', priority: 'new'},
    { id: '2', text: 'Add dark mode', kind: 'feature', priority: 'new' },
  ]

  const [reports, setReports] = useState<Report[]>(initialReports)
  const [newReportText, setNewReportText] = useState('')

  function addReport() {
    const text = newReportText.trim()
    if (text.length === 0) return

    const newReport: Report = {
      id: crypto.randomUUID(),
      text: text,    
      kind: 'bug',
      priority: 'new'
    }

    setReports([...reports, newReport])
    setNewReportText('')
  }

  return (
    <main>
      <h1>Joshua Smullen</h1>
      <p className = "subtitle"> Full Stack Developer </p>

      <h2>Senior Capstone Production Platform</h2>

      <p className = "bio">
        I am a full stack developer with experience in both frontend and backend development. 
      </p>

      <section className = "report-board">
        <h2>Bugs & Feature reqeusts</h2>
        <div className = "report">
          <input
            type="text"
            value={newReportText}
            onChange={(event) => setNewReportText(event.target.value)}
            placeholder="Describe a bug..."
            aria-label="New bug report"
          />

          <button type="button" onClick={addReport}>
            Add Bug
          </button>

          <ul>
            {reports.map((report) => (
              <li key={report.id}>
                {report.text} ({report.kind}, {report.priority})
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
