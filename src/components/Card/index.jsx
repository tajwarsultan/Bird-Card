import React from 'react'
import './styles.scss'
import Button from '../Button'
import Calender from '../../assests/icons/clander.svg'
function Card(props) {
  const card = [
    {
      bird: 'Early bird',
      birdPara: 'Sep 15 - Oct 4, 2021',
      date: 'Oct 1, 2021 - Jun 30, 2022',
      mainHead: 'Session 1 (Non member)',
      Calender: Calender,
      regDate: 'Registration Dates',
      aug: 'Aug 2 - Oct 01, 2021',
      des:
        'Here will be the description text for the product. 2-3 lines to describ ,',
      text: '$ 290',
      button: 'Buy now',
    },
  ]
  return (
    <>
      {card.map((item, i) => (
        <div className="card-container">
          <div className="head-text">
            <p className="bird-para">
              <span className="bird">{item.bird}</span> {item.birdPara}
            </p>
            <p className="date">{item.date}</p>
          </div>
          <div className="main-heading">
            <h2>{item.mainHead}</h2>
            <hr className="divider" />
            <div className="date-icon">
              <img src={item.Calender} alt="" />
              <p>{item.regDate}</p>
            </div>
            <p className="aug">{item.aug}</p>
            <p className="des">{item.des}</p>
          </div>
          <div className="text-btn">
            <h2>{item.text} </h2>
            <Button item={item.button} />
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
