import React, { useEffect, useState } from "react";
import './styles/countdown.css'

const Countdown = ({ targetDate }) => {

  //targetDate - vindo do site-editor
  
  if(targetDate === undefined){
    targetDate = "25/11/2022";
  }

  let dia = targetDate.split('/')[0]
  let mes = targetDate.split('/')[1]
  let ano = targetDate.split('/')[2]

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = new Date(ano, (mes - 1), dia) - new Date();
    let timeLeft = {}

    if (difference >= 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {

    timerComponents.push(
      <li>
        {timeLeft[interval]}
        <span className="infos">{interval}</span>
      </li>
    )
  });
  return (
    <div className="countdonw-news">
      <ul className='clock'>
        {timerComponents.length ? timerComponents : null}
      </ul>
    </div>
  );
}


Countdown.schema = {
  title: 'CountDown',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final utilizada no contador',
      type: 'string',
      default: '25/11/2022',
    }
  },
}

export default Countdown