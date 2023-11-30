import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [state, setState] = useState({
    darkMode: false,
    alert: null
  });

  useEffect(() => {
    if (state.darkMode) {
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
    }
  }, [state.darkMode]);

  function showAlert(message, type) {
    setState(prev => ({
      ...prev,
      alert: { msg: message, type: type }
    }));

    setTimeout(() => {
      setState(prev => ({
        ...prev,
        alert: null
      }))
    }, 1000);

  }

  function toggleMode(e) {
    if (state.darkMode) {
      setState(prev => ({
        ...prev,
        darkMode: false,
      }));

    } else {
      setState(prev => ({
        ...prev,
        darkMode: true,
      }));
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About Text Utilities" darkMode={state.darkMode} toggleMode={toggleMode} />
      <Alert alert={state.alert} />

      <div className='container my-3' >
        <TextForm heading="Enter the text to analyze" darkMode={state.darkMode} showAlert={showAlert} />
        <About />
      </div>

      <Routes>
        <Route path='/' element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} />} />
        <Route path='/about' element={<About darkMode={state.darkMode} />} />
      </Routes>
    </>
  );
}

export default App;
