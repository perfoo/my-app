import logo from './logo.svg';
import './App.css';
import * as dayjs from "dayjs";
import { nanoid } from "nanoid";

//model.id = nanoid();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heeeej!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>YO mothafucka!</p>
        <p>Today is {dayjs().format("MMMM-DD-YYTHH:mm:ss")}</p>
        <p>Your unique ID is {nanoid()}</p>
        <a
          className="App-link"
          href="https://perfoo.github.io/OtkupZG/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OTKUP ZAGREB
        </a>
      </header>
    </div>
  );
}

export default App;
