import React ,{useState} from 'react';
import './App.css';
//Import Components
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/FootNav'
 

function App() {
  const screenConfig = useState(0);
  return (
    <div >
      <h1>PIAIC Boot Camp 2020 - React Material UI - Grid</h1>
      <h2>Assignment : COVID 19 Tracker</h2>
      <h2>Student : Muhammad Javaid</h2>
     <NavBar />
     <InfoPanel currrentScreen= {screenConfig[0]}/>
     <FootNav screenConfig={screenConfig}/>
    
    </div>
  );
}

export default App;
