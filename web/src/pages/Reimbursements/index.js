import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import ReactLoading from 'react-loading';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';

function Reimbursements() {
  const [suspicions, setSuspicions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadSuspicions() {
    const response = await api.get('chamber_of_deputies/reimbursement/?suspicions=1');
    setSuspicions(response.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    loadSuspicions();
  }, []);

  return (
    <div id="page-reimbursements">
      <div className="content">
        <header>
          <img src={logo} alt="Sentinela" />

          <Link to="/">
            <FiArrowLeft />
            Voltar para Home
        </Link>
        </header>

        <div className="main">
          <h1>Listar Reembolsos - Todos</h1>

          {isLoading &&
            <div className="page-loading">
              <h2>Buscando dados . . .</h2>
              <ReactLoading
                type={"cylon"}
                color={"#b017f7"}
                width={250}
                height={250}
              />
            </div>
          }

          <ul>
            {
              suspicions.map(suspicion => (
                <li key={suspicion.document_id}>
                  <strong>Parlamentar:</strong>
                  <p>Dep. {suspicion.congressperson_name}</p>

                  <strong>Partido:</strong>
                  <p>{suspicion.party}</p>

                  <strong>Fornecedor:</strong>
                  <p>{suspicion.supplier}</p>

                  <strong>Serviço:</strong>
                  <p>{suspicion.subquota_description}</p>

                  <strong>Valor:</strong>
                  <p>{suspicion.document_value}</p>

                  <Link to="/create-reimbursement">
                    <button type="button">
                      Auditar
                    </button>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reimbursements;