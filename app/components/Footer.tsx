export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Constant Blaszyk — Fait avec ❤️ et Next.js
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Thenoob24"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a href="#hero" className="footer-link">
            Retour en haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
