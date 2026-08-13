import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <strong className={styles.name}>Daniel Mwangi</strong>
                    <span className={styles.divider}>•</span>
                    <span className={styles.role}>Educator · Developer · Mentor</span>
                </div>

                <div className={styles.meta}>
                    <span>All rights reserved © {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
