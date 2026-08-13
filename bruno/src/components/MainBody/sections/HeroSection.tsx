import styles from '../Mainbody.module.css';
import heroImage from '../../../assets/picha.jpeg';

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTitleRow}>
        <h1 className={styles.heroTitle}>DANIEL MWANGI</h1>
        <img
          src={heroImage}
          alt="Daniel Mwangi profile"
          className={styles.heroSideImage}
        />
      </div>
    </div>
  );
}

export default HeroSection;

