import styles from '../Mainbody.module.css';

function AboutSection() {
  return (
<div id="about" className={`${styles.aboutMe} theme-panel`}>

      <div className={styles.aboutHeader}>
        <div>
          <h1>About me</h1>
          <p className={styles.aboutIntro}>
            I combine teaching, mentoring, and software development to create meaningful
            learning experiences and polished digital solutions.
          </p>
        </div>
        <div className={styles.aboutBadge}>Educator · Developer · Mentor</div>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.aboutContent}>
          <p className={`${styles.aboutText} theme-card`}>
            I am a passionate educator and software developer with experience in both
            teaching and technology. As a teacher, I specialize in Mathematics, Computer
            Studies, Business Studies, Swimming, and Chess, helping students build
            confidence, discipline, and practical skills. As a software developer, I am
            proficient in HTML, CSS, Tailwind CSS, TypeScript, ShadCN, JavaScript, React,
            Python, and Django, creating modern, responsive, and user-friendly web
            applications.
          </p>

          <div className={styles.tagList}>
            <span className={`${styles.tag} theme-chip`}>Mathematics</span>
            <span className={`${styles.tag} theme-chip`}>Computer Studies</span>
            <span className={`${styles.tag} theme-chip`}>Business Studies</span>
            <span className={`${styles.tag} theme-chip`}>React</span>
            <span className={`${styles.tag} theme-chip`}>Django</span>
          </div>
        </div>

        <div className={styles.aboutCards}>
          <div className={`${styles.infoCard} theme-card`}>
            <h2>Teaching Focus</h2>
            <p>
              Supporting students with practical skills, confidence, and growth through
              tailored lessons in math, business, and computer studies.
            </p>
          </div>

          <div className={`${styles.infoCard} theme-card`}>
            <h2>Development Experience</h2>
            <p>
              Building modern web applications using responsive UI, clean code, and scalable
              tools like React, TypeScript, and Django.
            </p>
          </div>

          <div className={styles.statGrid}>
            <div className={`${styles.statItem} theme-stat`}>
              <strong>5+</strong>
              <span>Years teaching</span>
            </div>
            <div className={`${styles.statItem} theme-stat`}>
              <strong>10+</strong>
              <span>Projects built</span>
            </div>
            <div className={`${styles.statItem} theme-stat`}>
              <strong>50+</strong>
              <span>Students mentored</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

