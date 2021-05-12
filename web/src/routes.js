import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateReimbursement from './pages/CreateReimbursement';
import Reimbursements from './pages/Reimbursements';

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateReimbursement} path="/create-reimbursement" />
      <Route component={Reimbursements} path="/reimbursements" />
    </BrowserRouter>
  );
}

export default Routes;