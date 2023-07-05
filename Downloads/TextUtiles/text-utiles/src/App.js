import About from "./components/About";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import{
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";

function App() {
   const [mode,setMode]=useState("light")//whether dark mode is enable or not
   const[alert,setAlert]=useState(null);

   const showAlert=(message,type)=>{
           setAlert({
            msg:message,
            type:type
           })
           setTimeout(() => {
            setAlert(null)
           }, 1500);
   }
   
   
   const toggleMode=()=>{
    
    if(mode==="light"){
      setMode ("dark")
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      //document.title="TextUtiles-Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtiles is Amazing Mode"
      // },1500)
    }else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title="TextUtiles-Light Mode";
    }
   }
  return (
    <>
    <Router>
    <Navbar title="TextUtiles" AboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}/> 
      {/* <About/> */}
      <Route  exact path="/" element={<TextForm showAlert={showAlert} heading=" TextUtiles - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}/>
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
      </Routes>
      </div>
   </Router>
    </>
  
  );
}

export default App;