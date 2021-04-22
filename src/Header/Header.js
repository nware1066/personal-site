import React from 'react';
import './Header.css'

function Header() {
  return (
    <>
      <section className="header">
        <hr className="solid-line"></hr>
        <hr className="dotted-line"></hr>
        <div className="header-text">
          <h1>Naomi Ware</h1>
          <p>Front End Web Developer</p>
        </div>
        <hr className="dotted-line"></hr>
        <hr className="solid-line"></hr>
      </section>
    </>
  );
}

export default Header;