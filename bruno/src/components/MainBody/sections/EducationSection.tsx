import styles from '../Mainbody.module.css';

function EducationSection() {
  return (
    <section id="education" className={`${styles.education} theme-panel`}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Education</h1>
        <p className={styles.sectionSubtitle}>
          Academic background and training that shaped my teaching and development journey.
        </p>
      </div>

      <div className={styles.educationGrid}>
        <article className={`${styles.educationCard} theme-card`}>
          <h2 className={styles.educationCardTitle}>
            Bachelor of Science in Computer Science
          </h2>
          <p className={styles.educationCardText}>IT Masters University Australia</p>
        </article>

        <article className={`${styles.educationCard} theme-card`}>
          <h2 className={styles.educationCardTitle}>
            Degree of Education (Information Technology)
          </h2>
          <p className={styles.educationCardText}>Tom Mboya University</p>
        </article>
      </div>
    </section>
  );
}

export default EducationSection;

