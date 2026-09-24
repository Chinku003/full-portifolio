import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import styles from '../MainBody.module.css';
import { useState, type ChangeEvent, type FormEvent } from 'react';






function ContactSection() {
  const emptyForm = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [serverMessage, setServerMessage] = useState('');

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setShowSuccess(false);
    setSubmitError('');
    setServerMessage('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setSubmitError('Please fill in all fields.');
      setServerMessage('');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedData.email)) {
      setSubmitError('Please enter a valid email address.');
      setServerMessage('');
      return;
    }

    setIsSubmitting(true);
    setShowSuccess(false);
    setSubmitError('');
    setServerMessage('');

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
      const response = await fetch(`${apiBaseUrl}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedData),
      });

      const data = await response.json().catch(() => null);
      console.log('Server response:', data);
      console.log('Response status:', response);

      if (!response.ok) {
        setServerMessage(data?.message || 'Unable to send your message right now. Please try again.');
        throw new Error(data?.message || 'Unable to send your message right now. Please try again.');
      }

      setFormData(emptyForm);
      setShowSuccess(true);
      setServerMessage(data?.message || 'Message received successfully.');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`${styles.contact} theme-panel`}>

      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <p className={styles.sectionSubtitle}>
          Send a message or reach out directly—I’ll respond as soon as possible or maybe not.
        </p>
      </div>

      <div className={styles.contactGrid}>
        <div className={`${styles.contactCard} theme-card`}>
          <h2 className={styles.contactCardTitle}>Sema  wantam  kwanza</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.contactInput} theme-input`}
              type="text"
              placeholder="Your Name"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.contactInput} theme-input`}
              type="email"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.contactTextarea} theme-input`}
              placeholder="Your Message"
            />
            <button
              className={`${styles.contactButton} theme-button`}
              type="submit"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {(isSubmitting || showSuccess || submitError || serverMessage) && (
              <p
                className={`${styles.statusMessage} ${submitError ? styles.statusLoading : showSuccess ? styles.statusSuccess : styles.statusLoading}`}
                aria-live="polite"
              >
                {isSubmitting ? 'Sending your message...' : submitError ? submitError : serverMessage && 'Message sent successfully!'}
              </p>
            )}
          </form>
        </div>

        <div className={`${styles.contactCard} theme-card`}>
          <h2 className={styles.contactCardTitle}>Social</h2>
          <div className={styles.contactHint}>
            <a
              className={styles.socialIcon}
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              className={styles.socialIcon}
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              className={styles.socialIcon}
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={styles.socialIcon}
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              className={styles.socialIcon}
              href="https://tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

