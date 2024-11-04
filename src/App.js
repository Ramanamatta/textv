// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
    const [mode,setMode]=useState("light");
    const [alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
    }
    const toogleMode=()=>{
      if(mode==="dark"){
        setMode("light");
        document.body.style.backgroundColor='white';
        showAlert("LightMode Enabled","success");
      }
      else{
        setMode("dark");
        document.body.style.backgroundColor='#020e1a';
        showAlert("DarkMode Enabled","success");

      }
    }
     return (
      <>   
      {/* <Router>
      <Navbar title="TEXTUTILS"  mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>

      {/* <Navbar/> */}
      {/* <div className='container my-3'>
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
      </Routes>
          
      </div> */}
      {/* <About/> */}
      {/* </Router>  */}
      <Navbar title="TEXTUTILS"  mode={mode} toogleMode={toogleMode}/>

      <Alert alert={alert}/>
      <div className='container my-3'>
      <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
      </div>
      {/* <About/> */}


      </>
  );
}

export default App;
