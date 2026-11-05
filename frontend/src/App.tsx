import './App.css'

type ReportKind = "bug" | "feature";

type Report = {
  id: string;
  text: string;
  kind: ReportKind;
}

function App() {

  const sampleReport: Report = {
    id: "1",
    text: "This is a sample bug report.",
    kind: "bug"
  };

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
          <h3>{sampleReport.text}</h3>
          <p>{sampleReport.kind}</p>
        </div>
      </section>
    </main>
  )
}

export default App
