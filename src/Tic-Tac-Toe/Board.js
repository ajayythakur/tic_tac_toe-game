import React, { useEffect, useState } from 'react';
import Square from './Square';

const Board = ()=>{
    const [player1,setPlayer1] = useState("");
    const [player2,setPlayer2] = useState("");
    useEffect(()=>{
        const player_one = prompt("Enter 1st Player Name");
        setPlayer1(player_one);
        const player_two = prompt("Enter 2nd Player Name");
        setPlayer2(player_two);
    },[])
    console.log(player1,player2);

    const [state,setState]=useState(Array(9).fill(null));
    const [x,setX]=useState(true);

    const handleClick = (index) =>{
        if(state[index] !== null) {
            return;
        }
        const copyState=[...state];
        copyState[index]= x ? "X" : "O";
        setState(copyState);
        setX(!x);
    }

    const checkWinner = () =>{
        const possibleWin=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let win of possibleWin){
            const [a,b,c] = win;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                if(state[a] === "X"){
                    return player1;
                }
                else{
                    return player2;
              }
                // console.log(state[a]);
                // return state[a];
            }
        }
        return false;
    }

    const winner = checkWinner();

    const handleReset =() =>{
        setState(Array(9).fill(null));
    }

    console.log(state)


    
    return(
        <>
        {winner ? (<><h1>{winner} is the winner</h1><button onClick={handleReset}>Play Again</button></>) : (<>
    
        <div className='board'>
            <div className='row'>
                <Square onClick={()=> handleClick(0)} value={state[0]} />
                <Square onClick={()=> handleClick(1)} value={state[1]}/>
                <Square onClick={()=> handleClick(2)} value={state[2]}/>
            </div>
            <div className='row'>
                <Square onClick={()=> handleClick(3)} value={state[3]}/>
                <Square onClick={()=> handleClick(4)} value={state[4]}/>
                <Square onClick={()=> handleClick(5)} value={state[5]}/>
            </div>
            <div className='row'>
                <Square onClick={()=> handleClick(6)} value={state[6]}/>
                <Square onClick={()=> handleClick(7)} value={state[7]}/>
                <Square onClick={()=> handleClick(8)} value={state[8]}/>
            </div>
        </div>
        </>)
        }
        </>
    )
}

export default Board;