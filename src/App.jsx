import logo from './logo.svg';
import './App.css';
import './components/Navbar/NavBar'
import NavBar from './components/Navbar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />

     
      <div className='content'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div >

    </div>
  );
}

export default App;
