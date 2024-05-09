import { WINNER_COMBOS } from "../Constants";

export  const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las convinaciones ganadoras
    // para ver si x u o gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  }
  export const checkEndGame = (newBoard) => {
    // revisamos si hay empate
    // si no hay mas espacios vacios
    // en el tablero
    return newBoard.every((square) => square != null);
  };