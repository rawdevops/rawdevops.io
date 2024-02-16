// CountdownTimer.tsx

import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

interface CountdownTimerProps {
  targetDate: string; // formato 'YYYY-MM-DD'
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
      <div className="content-container">
        <div className="text-container">
          <h1>Lançamento do nosso novo curso</h1>
          <h1>SigNoz: plataforma all-in-one de observabilidade open source</h1>
          <p>07/04/2024 às 19h</p>
        </div>
        <img src="img/countdown/signoz.gif" alt="Logo 1" className="logo" />

        <div className="timer">
          <div className="timer-item">
            <span className="timer-value">{timeLeft.days}</span>
            <span className="timer-label">Dias</span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-item">
            <span className="timer-value">{timeLeft.hours}</span>
            <span className="timer-label">Horas</span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-item">
            <span className="timer-value">{timeLeft.minutes}</span>
            <span className="timer-label">Minutos</span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-item">
            <span className="timer-value">{timeLeft.seconds}</span>
            <span className="timer-label">Segundos</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CountdownTimer;
