import { useState, useEffect } from 'react'
import './App.css'
import axios, { isCancel, AxiosError } from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';


function App() {

  const [cards, setCards] = useState([])
  const [variableCards, setVariableCards] = useState('')



  const filteredCards = event => {
    setVariableCards(event.target.value);
  };

  // uso useEffect, per evitare di avere un loop di chiamate axios

  useEffect(() => {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then(response => {
        setCards(response.data.data)
      }).catch(error => {
        console.log(error);
      })
  }, []);

  // Filtro le carte in base al valore di variableCards e assegno il risultato alla variabile filtered

  const filtered = cards.filter(card => card.archetype && card.archetype.toLowerCase().startsWith(variableCards.toLowerCase()));


  let content;

  if (filtered.length > 0) {
    content = (
      <div className="container">
        <input className='my-3' onChange={filteredCards} placeholder='Cerca la tua carta' type="text" name="searchedCard" id="searchedCard" />
        <div className="row">
          {filtered.map((card) => (
            <div className="col-4 mb-4" key={card.id}>
              <div className='card h-100 d-flex flex-column'>
                <h1 className='text-center'>{card.archetype}</h1>
                {card.card_images.map((cardImage) => (
                  <img key={cardImage.id} src={cardImage.image_url_cropped} className="card-img-top" alt="" />
                ))}
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    content = (
      <div className="container">
        <input className='my-3' onChange={filteredCards} placeholder='Cerca la tua carta' type="text" name="searchedCard" id="searchedCard" />
        <p>La tua ricerca non ha portato nessun risultato.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      {content}
    </>
  )
}

export default App
