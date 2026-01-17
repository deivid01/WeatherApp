import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Feito por{' '}
        <a 
          href="https://github.com/deivid01" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          Deivid Peres
        </a>
        {' '}© {new Date().getFullYear()}
      </p>
    </footer>
  );
};
