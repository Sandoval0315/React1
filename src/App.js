import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Component7 from './components/Component7';
import Component8 from './components/Component8';
import Component9 from './components/Component9';
import Component10 from './components/Component10';
import Component11 from './components/Component11';
import Component12 from './components/Component12';
import Component13 from './components/Component13';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <p>
        Bienvenidos a mi pagina de componentes con React:
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <Component/>
        <a
          className="App-link"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
        <br></br>
        <Component2/>
        <br></br>
        <Component3/>
        <br></br>
        <Component4/>
        <br></br>
        <Component5/>
        <br></br>
        <Component6/> 
        <br></br>
        <Component7/>
        <br></br>
        <Component8/>
        <br></br>
        <Component9/>
        <br></br>
        <Component10/>
        <br></br>
        <Component11/>
        <br></br>
        <Component12/>
        <br></br>
        <Component13/>
      </header>
    </div>
  );
}

export default App;
