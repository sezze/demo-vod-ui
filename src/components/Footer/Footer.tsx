import React from 'react';
import TMDBLogo from 'images/tmdb-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <a
        href="https://developers.themoviedb.org/3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img width={128} src={TMDBLogo} alt="The Movie DB" />
      </a>
    </footer>
  );
};

export default Footer;
