import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-intro">Hi, I'm</p>

          <h1 className="hero-name">Sanjana Madhavan</h1>

          <p className="hero-sub">
            I design and build clean, thoughtful web experiences.
          </p>

          <div className="hero-info">
            <p className="hero-info-title">
                Computer Science Undergraduate · Frontend & ML 
            </p>

            <ul className="hero-info-list">
              <li>Interested in how systems work under the hood</li>
              <li>Exploring social networks & recommendation systems</li>
              <li>Learning backend, system design, and ML fundamentals</li>
            </ul>
         </div>

          
          <div className="hero-btn-stack">
            <button
              className="hero-btn"
              onClick={() => navigate("/contact")}
            >
              Let’s Talk
            </button>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hero-visual">
          <div className="image-glass">
            <img src="/src/assets/me.jpeg" alt="Sanjana M" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
