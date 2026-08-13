import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import profileImage from '../../assets/profile.png.jpeg';
import { FaSun, FaMoon } from 'react-icons/fa';

function NavBar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', isDark);

    return () => {
      document.body.classList.remove('theme-dark');
    };
  }, [isDark]);

  const handleSearchClick = () => {
    const inputId = 'search-input';
    const existing = document.getElementById(inputId);
    if (existing) {
      existing.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (existing as HTMLInputElement).focus();
      return;
    }

    const input = document.createElement('input');
    input.id = inputId;
    input.type = 'text';
    input.placeholder = 'Search...';

    input.style.position = 'fixed';
    input.style.transition = 'opacity 200ms ease, transform 200ms ease';
    input.style.opacity = '0';
    input.style.transform = 'translateX(-50%) translateY(-6px)';
    input.style.top = '88px';

    requestAnimationFrame(() => {
      input.style.opacity = '1';
      input.style.transform = 'translateX(-50%) translateY(0px)';
    });
    input.style.left = '50%';
    input.style.width = 'min(720px, 90vw)';
    input.style.padding = '0.9rem 1rem';
    input.style.borderRadius = '14px';
    input.style.border = '1px solid rgba(148,163,184,0.35)';
    input.style.outline = 'none';
    input.style.fontSize = '1rem';
    input.style.background = 'rgba(255,255,255,0.95)';
    input.style.boxShadow = '0 18px 45px rgba(15,23,42,0.18)';
    input.style.zIndex = '9999';

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.remove();
      }
    });

    document.body.appendChild(input);
    input.focus();

    const onDocClick = (e: MouseEvent) => {
      if (!input.contains(e.target as Node)) {
        input.remove();
        document.removeEventListener('click', onDocClick);
      }
    };
    setTimeout(() => document.addEventListener('click', onDocClick), 0);
  };

  function handleAboutClick() {
    const el = document.getElementById('about');
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleSkillClick() {
    const al = document.getElementById('skill');
    if (!al) return;
    al.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleContactClick() {
    const ali = document.getElementById('contact');
    if (!ali) return;
    ali.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleEduClick() {
    const edu = document.getElementById('education');
    if (!edu) return;
    edu.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleProClick() {
    const pro = document.getElementById('projects');
    if (!pro) return;
    pro.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className={`${styles.navbar} ${isDark ? styles.navbarDark : ''}`}>
      <div className={styles.brand}>
        <img src={profileImage} alt="profile" className={styles.profile} />
      </div>

      <div className={styles.navGroups}>
        <div className={styles.navPrimary}>
          <button type="button" className={styles.navButton} onClick={handleAboutClick}>
            About
          </button>
          <button type="button" className={styles.navButton} onClick={handleSkillClick}>
            Skills
          </button>
          <button type="button" className={styles.navButton} onClick={handleProClick}>
            Projects
          </button>
          <button type="button" className={styles.navButton} onClick={handleEduClick}>
            Education
          </button>
          <button type="button" className={styles.navButton} onClick={handleContactClick}>
            Contact
          </button>
        </div>

        <div className={styles.navSecondary}>
          <button
            type="button"
            className={`${styles.navButton} ${isDark ? styles.navButtonDark : ''}`}
            aria-label="Toggle theme"
            aria-pressed={isDark}
            title="Toggle theme"
            onClick={() => setIsDark((prev) => !prev)}
          >
            <span className={styles.themeIcon} aria-hidden="true">
              {isDark ? <FaMoon size={18} className={styles.iconActive} /> : <FaSun size={18} className={styles.iconActive} />}
            </span>
          </button>
          <button type="button" className={styles.navButton} onClick={handleSearchClick}>
            Search
          </button>
          <button type="button" className={styles.navButton}>
            Notifications
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

