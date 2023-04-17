import React, { Component } from 'react'

export class GameComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        squares: Array(9).fill(null),
         player : 'X',
         winner: null,
         whichPlayerWon:'',
         isPlayer1Turn:'✌️✌️Your Turn✌️✌️',
         isPlayer2Turn:'',
         trophiesEarnedByPlayer1:'',
         trophiesEarnedByPlayer2:'',

      }
    }

    checkWinning(){
      let winRow = [
        ["0","1","2"],
        ["3","4","5"],
        ["6","7","8"],
        ["0","3","6"],
        ["1","4","7"],
        ["3","5","8"],
        ["0","4","8"],
        ["3","4","6"]
      ]

      for(let i=0;i<winRow.length;i++)
      {
        const [a,b,c] = winRow[i]
        if(this.state.squares[a] && this.state.squares[a] == this.state.squares[b] && this.state.squares[c])
        {
          this.state.whichPlayerWon = this.state.player === 'X' ? 'Player 1' :'Player 2'
          let trophiesforPlayer1 = this.state.player === 'X' ? '🏆' : '';
          let trophiesforPlayer2 = this.state.player === 'O' ? '🏆' : '';
          this.state.trophiesEarnedByPlayer1 = 
          this.setState({
            winner: this.state.player,
            trophiesEarnedByPlayer1 : trophiesforPlayer1,
            trophiesEarnedByPlayer2 : trophiesforPlayer2
            
          })
          alert(`${this.state.whichPlayerWon} you won`)
        }
      }
    }

   clickHandler(index) 
   {
      
      if(this.state.squares[index] === null && this.state.winner === null)
      {
        let newValue = this.state.squares
        newValue[index] = this.state.player
        let nextPlayer = 
        this.setState({
          squares : newValue,
          player : this.state.player === 'X' ? 'O' : 'X',
          isPlayer1Turn: this.state.isPlayer1Turn === '✌️✌️Your Turn✌️✌️' ? '' : '✌️✌️Your Turn✌️✌️',
          isPlayer2Turn: this.state.isPlayer2Turn === '' ? '✌️✌️Your Turn✌️✌️' : '',
        })
        

        this.checkWinning()
      }
      if(this.state.winner)
        {
          alert(`start new match`)
        }
       
      
      console.log(this.state.squares)
   }

   newGameButtonHandler = () =>{
    if(this.state.winner === null)
    {
      alert('match drawn')
    }
    this.setState({
      squares: Array(9).fill(null),
      player : 'X',
      winner: null,
      isPlayer1Turn:'✌️✌️Your Turn✌️✌️',
      isPlayer2Turn:''
    })
   }

  render() {
    
    const Box = this.state.squares.map((box,index) => 
      <div 
        className='w-[150px] h-[150px] border-2 border-slate-400 flex justify-center items-center text-4xl'
        key={index}
        onClick={()=>this.clickHandler(index)}
        
      >{box}</div>
    )

    return (
      <div
        className='flex h-screen'
      >

          <div
            className='w-[25%] border border-r-gray-500'
          >
            <h1 className='text-4xl py-10'>Player 1</h1>
            <p className='text-xl'>{this.state.isPlayer1Turn}</p>
            {/* <div
              className='mt-[35%] border border-t-gray-500 w-full'
            >
              <h3 className='text-3xl pt-5'>Earned Trophies</h3>
              <h1 className='flex justify-start px-5 pt-5 text-5xl'>{this.state.trophiesEarnedByPlayer1}</h1>
            </div> */}
          </div>

          <div
            className='flex flex-col justify-start items-center w-[50%]'
          >
              <h1 className='text-6xl py-6'>Tic Tac Toe</h1>
              <div
              className='w-[450px] h-[450px] flex flex-wrap'
              >
                {Box}
              </div>

              <button
                className='mt-10 bg-blue-600 px-4 py-2 rounded-lg text-2xl text-white hover:translate-y-0.5'
                onClick={this.newGameButtonHandler}
              >Start new Match</button>
          </div>

          <div
            className='w-[25%] border border-l-gray-500'
          >
            <h1 className='text-4xl py-10'>Player 2</h1>
            <p className='text-xl'>{this.state.isPlayer2Turn}</p>
            {/* <div
              className='mt-[35%] border border-t-gray-500 w-full'
            >
              <h3 className='text-3xl pt-5'>Earned Trophies</h3>
              <h1 className='flex justify-start px-5 pt-5 text-5xl'>{this.state.trophiesEarnedByPlayer2}</h1>
            </div> */}


          </div>
          
      </div>
    )
  }
}

export default GameComponent