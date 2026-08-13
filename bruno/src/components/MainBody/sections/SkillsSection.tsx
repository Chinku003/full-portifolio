import styles from '../Mainbody.module.css';

function SkillsSection() {
  return (
<section id="skill" className={`${styles.skills} theme-panel`}>

      <h1>Skills</h1>
      <div className={styles.skillsGrid}>
        <div className={`${styles.skillCard} theme-card`}>
          <h2>HTML</h2>
          <p>Semantic mark-up for accessible layouts.</p>
        </div>
        <div className={`${styles.skillCard} theme-card`}>
          <h2>CSS</h2>
          <p>Responsive styles, layout and animation.</p>
        </div>
        <div className={`${styles.skillCard} theme-card`}>
          <h2>Tailwind CSS</h2>
          <p>Utility-first styling for fast UI development.</p>
        </div>
        <div className={`${styles.skillCard} theme-card`}>
          <h2>ShadCN</h2>
          <p>Component-driven design with modern styling.</p>
        </div>
        <div className={`${styles.skillCard} theme-card`}>
          <h2>JavaScript</h2>
          <p>Interactive behavior and client-side logic.</p>
        </div>
        <div className={`${styles.skillCard} theme-card`}>
          <h2>React</h2>
          <p>Reusable UI components and app architecture.</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

