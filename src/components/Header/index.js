import React from "react";
import "./Header.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
  return <header className={black ? 'black' : ''}>
    <div className="header--logo">
      <a href="/">
        <img src="https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg" alt="Netflix"/>
      </a>
    </div>
    <div className="header--user">
      <a href="/">
        <img src="https://occ-0-2092-1356.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfBRGF4_-6cadnRPFQ9dFSr1rJp67STSJooYHphK1OPloZ_7ZHo_rmlUBd8LYZ7AMt3sPh4IOUlruBhsaPlMwWU.png?r=9cc" alt="Usuario"/>
      </a>
    </div>
  </header>;
};
