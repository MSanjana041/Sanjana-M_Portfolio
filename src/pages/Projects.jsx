function Projects(){
    return(
     <section className="projects" id="projects">
       <div className="projects-header">
        <p className="projects-label">My Work</p>
        <h2>Featured Projects</h2>
        <p className="projects-sub">
          A selection of projects that reflect my interest in systems,
          machine learning, and real-world problem solving.
        </p>
       </div>

       <div className="projects-grid">
        <ProjectCard
          letter="F"
          title="Fog-Based Healthcare Monitoring & Dynamic Load Balancing"
          desc="Edge–fog based healthcare monitoring system with dynamic task distribution using YAFS."
          tech={["Python", "YAFS", "Edge/Fog Computing"]}
        />

        <ProjectCard
          letter="E"
          title="Proximity-Based Alarm System"
          desc="Embedded system that triggers alerts based on proximity sensing."
          tech={["Embedded C", "Sensors", "Microcontrollers"]}
        />

        <ProjectCard
          letter="N"
          title="NLP Grammar Correction System"
          desc="Grammar correction system built using transformer-based language models."
          tech={["Python", "Transformers", "NLP"]}
        />

        <ProjectCard
          letter="S"
          title="Sales Forecasting & Inventory Optimization"
          desc="Machine learning pipeline to forecast demand and optimize inventory decisions."
          tech={["Python", "ML", "Time Series"]}
        />

        

        </div>
    </section>
  );
}

function ProjectCard({ letter, title, desc, tech }) {
  return (
    <div className="project-card">
      <div className="project-preview">
        <span>{letter}</span>
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="project-tech">
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;