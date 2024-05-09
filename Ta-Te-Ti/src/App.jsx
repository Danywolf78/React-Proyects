import { Children } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { useState } from "react";
import { Square } from "./components/Square";
import { TURNS } from "./Constants";
import { checkWinnerFrom,checkEndGame } from "./Logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./Logic/storage";

function App() {
  const [board, setBoard] = useState(() =>{
  
  const boardFromStorage= window.localStorage.getItem('board')
    if (boardFromStorage)return JSON.parse(boardFromStorage)
      return Array(9).fill(null)
    })
  
  const [turn, setTurn] = useState (() =>{
    const turnFromStorage= window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X

  })
  
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

   resetGameStorage()
  };
  

  const updateBoard = (index) => {
    // no actualizamos esta posicion
    // si ya tiene algo
    if (board[index] || winner) return;
    // actualizo el tablero
    const newBoard = [...board];
    newBoard[index] = turn; // x u o
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
     //guardar aqui partida
      saveGameToStorage({
        board: newBoard,
        turn: newTurn})
    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //Empate
    }
  };

  return (
    <main className="board">
      <h1> Ta-Te-Ti</h1>
      <button onClick={resetGame}> Reset del Juego </button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  );
}

export default App;
