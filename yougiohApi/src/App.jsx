import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios, { isCancel, AxiosError } from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {

  const [cards, setCards] = useState([])

  const [text, setText] = useState('ciao')


  function changeText() {
    setText('pippo')
  };

  const getCards = () => {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then(response => {
        console.log(response.data.data);

        setCards(response.data.data)
      }).catch(error => {
        console.log(error);
      })
  }


  return (
    <>
      <button onClick={getCards}>cliccami</button>
     

      {cards.map((card) => {
        return (

          <div className='card' key={card.id}>
            {card.name}
          </div>
        )
      })}

    </>
  )
}

export default App
