import './App.css';
import Board from './Tic-Tac-Toe/Board';

function App() {
  return (
    <div>
      <h1 className='title'>Welcome to Tic-Tac-Toe</h1>
      <Board/>
      <p>Point to remember</p>
      <ul>
      <li>Player 1 will be assigned X</li>
      <li>Player 2 will be assigned O</li>

      </ul>
    </div>
  );
}

export default App;
