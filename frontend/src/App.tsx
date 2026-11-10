import './App.css'

type ReportKind = "bug" | "feature";

type Report = {
  id: string;
  text: string;
  kind: ReportKind;
}

function App() {

  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug' },
    { id: '2', text: 'Add dark mode', kind: 'feature' },
  ]




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
          <ul>  
            {initialReports.map((report) => (    
                  <li key={report.id}>     
                      {report.text} ({report.kind})    
                  </li>  
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
