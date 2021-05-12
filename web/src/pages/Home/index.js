import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Serenata" />
        </header>

        <main>
          <h1>Sentinele-se!</h1>
          <p>Mantemos a população informada sobre fraudes fiscais praticadas por parlamentares.</p>

          <Link to="/reimbursements">
            <span>
              <FiLogIn />
            </span>
            <strong>Fazer login</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;