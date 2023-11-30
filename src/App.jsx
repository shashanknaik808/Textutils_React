import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.background = '#ffffff';
      showAlert("Dark Mode has been Enabled", "success");
    };
  }

  return (
    <>
      <Navbar title="textUtils" about="About Text Utilities" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3' >
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
