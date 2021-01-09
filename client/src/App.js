import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthApi from './utils/AuthApi';
import {hasSigned} from "./components/auth-api";


function App() {
  const [auth, setAuth] = useState(false);
  
  const readSession = async () =>{
    const res = await hasSigned();
    if (res.data.auth){
      setAuth(true);
    }
  }
  useEffect(() =>{
    readSession();
  },[]);

  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

export default App;