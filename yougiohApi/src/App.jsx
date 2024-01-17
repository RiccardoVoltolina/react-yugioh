import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios, { isCancel, AxiosError } from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {

  const [cards, setCards] = useState([])

  axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
    .then(response => {
      console.log(response.data.data);

      setCards(response.data.data)
    }).catch(error => {
      console.log(error);
    })


  return (
    <>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
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


    </>
  )
}

export default App
