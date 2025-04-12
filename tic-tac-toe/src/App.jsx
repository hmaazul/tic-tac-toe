import { useState, useEffect } from 'react'
import './App.css'
import { Pattern } from './Pattern';


function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({winner: "none",state: "none" });

  useEffect(() => {
    checkWinner();
    checkTie();
  },[board]);
  
  useEffect(()=> {
    if(result.state != "none"){
      alert(`Game finished! Winning Player: ${result.winner}`);
    }
  },[result]);

  function chooseSquare(square){
    setBoard(board.map((val,idx) => {
      if(idx == square && val==""){
        return player
      }

      return val
    }))

    if(player =="X")
    {
      setPlayer("O")
    }
    else{
      setPlayer("X")
    }
    
  }

  function checkWinner()
  {
    Pattern.forEach( (pattern) => {
      const firstPlayer = board[pattern[0]];
      if(firstPlayer == "") return;
      let foundWinner = true;
      pattern.forEach((idx) => {
        if(board[idx] != firstPlayer) foundWinner = false;
      });

      if(foundWinner)
      {
        setResult({winner: firstPlayer, state: "won"});
      }
      else{
        // setResult({winner: firstPlayer, state: "draw"});
      }


    })
  }

  function checkTie()
  {
    let filled = true;
    board.forEach((play) => {
      if(play == "") filled=false;
    })

    if(filled)
    {
      setResult({winner: "No one won",state: "Tie"});
    }
  }

  return (
    <>
      <h1>TIC TAC TOE</h1>
      <div class="play-board">
        <div className='row'>
          <div class="play-btn" val={board[0]} onClick={() => {chooseSquare(0)} }>
            {board[0]}
          </div>
          <div class="play-btn" val={board[1]} onClick={() => {chooseSquare(1) } }>
            {board[1]}
          </div>
          <div class="play-btn" val={board[2]} onClick={() => {chooseSquare(2)} }>
            {board[2]}
          </div>
        </div>
        <div className='row'>
          <div class="play-btn" val={board[3]} onClick={() => {chooseSquare(3)} }>
            {board[3]}
          </div>
          <div class="play-btn" val={board[4]} onClick={() => {chooseSquare(4)} }>
            {board[4]}
          </div>
          <div class="play-btn" val={board[5]} onClick={() => {chooseSquare(5)} }>
            {board[5]}
          </div>
        </div>
        <div className='row'>
          <div class="play-btn" val={board[6]} onClick={() => {chooseSquare(6)} }>
            {board[6]}
          </div>
          <div class="play-btn" val={board[7]} onClick={() => {chooseSquare(7)} }>
            {board[7]}
          </div>
          <div class="play-btn" val={board[8]} onClick={() => {chooseSquare(8)} }>
            {board[8]}
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default App
