import React, { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles, Cake } from 'lucide-react';
import './BirthdayPage.css';
import herPhoto from './her.jpeg';

export default function BirthdayPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [surprise, setSurprise] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const petals = Array.from({ length: 10 });
  const sparkles = Array.from({ length: 16 });

  return (
    <div className="birthday-page">

      {/* Floating petals */}
      {petals.map((_, i) => (
        <div
          key={i}
          className={`petal petal-${i % 3}`}
          style={{
            left: `${(i * 10) + 3}%`,
            animationDuration: `${7 + i}s`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Twinkling gold sparkles */}
      {sparkles.map((_, i) => (
        <Sparkles
          key={`s-${i}`}
          className="sparkle"
          color="#e8b64c"
          size={12 + (i % 3) * 5}
          style={{
            top: `${(i * 6) % 90}%`,
            left: `${(i * 11) % 95}%`,
            animationDuration: `${2 + (i % 4)}s`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="content">

        <div className="icon-badge">
          <Cake color="#e8b64c" size={44} />
        </div>

        <p className="eyebrow">Unakku Mattum Oru Chinna Surprise</p>

        <h1 className="headline">
          Happy Birthday,
          <br />
          <span className="headline-accent">Dharshini</span> ✨
        </h1>

        {/* Her photo */}
        <div className="photo-frame">
          <img src={herPhoto} alt="Dharshini" className="photo" />
        </div>

        {showMessage && (
          <div className="message-card">
            <p className="message-text">
              Ovvoru varusham nee en pakkathula irukkarathu, enakku kedaikkara
              oru periya gift madhiri thaan. Indha naal, ennoda everyday-a
              happy-a, soft-a, innum konjam golden-a maathura oru birthday.
            </p>
            <p className="message-signature">
              Vaarthaila sollamudiyadha alavuku unna love pandren, Dharshini.
            </p>
          </div>
        )}

        <button className="surprise-button" onClick={() => setSurprise(!surprise)}>
          <Gift size={20} />
          {surprise ? "Nee thaan en everything" : 'Konjam Surprise Click Pannu'}
        </button>

        {surprise && (
          <div className="surprise-line">
            <Heart fill="#e8657a" color="#e8657a" size={20} />
            <span>Happy Birthday, forever unnoda thaan</span>
            <Heart fill="#e8657a" color="#e8657a" size={20} />
          </div>
        )}

        <p className="footer-note">Unna miga nesikkira oruthanaala seiyappattadhu</p>
      </div>
    </div>
  );
}