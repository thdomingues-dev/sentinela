import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.png';

function CreateReimbursement() {
  return (
    <div id="page-create-reimbursement">
      <div className="content">
        <header>
          <img src={logo} alt="Sentinela" />

          <Link to="/">
            <FiArrowLeft />
            Voltar para Home
        </Link>
        </header>

        <form>
          <h1>Auditar Reembolso</h1>

          <fieldset>
            <legend>
              <h2>Dados do Parlamentar</h2>
            </legend>


            <div className="field">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="party">Partido</label>
                <input
                  type="text"
                  name="party"
                  id="party"
                />
              </div>

              <div className="field">
                <label htmlFor="year">Mandato</label>
                <input
                  type="text"
                  name="year"
                  id="year"
                />
              </div>

              <div className="field">
                <label htmlFor="state">Região</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Dados do Documento</h2>
            </legend>

            <div className="field">
              <label htmlFor="description">Descrição do Serviço</label>
              <input
                type="text"
                name="description"
                id="description"
              />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="supplier">Fornecedor</label>
                <input
                  type="text"
                  name="supplier"
                  id="supplier"
                />
              </div>

              <div className="field">
                <label htmlFor="cnpj_cpf">CPF/CNPJ</label>
                <input
                  type="text"
                  name="cnpj_cpf"
                  id="cnpj_cpf"
                />
              </div>
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="document_id">Nº do Documento</label>
                <input
                  type="text"
                  name="document_id"
                  id="document_id"
                />
              </div>

              <div className="field">
                <label htmlFor="document_value">Valor</label>
                <input
                  type="text"
                  name="document_value"
                  id="document_value"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="URL">Nota Fiscal</label>
              <input
                type="text"
                name="URL"
                id="URL"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default CreateReimbursement;