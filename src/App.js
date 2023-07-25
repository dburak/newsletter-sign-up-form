import { useState } from 'react';
import './App.css';
import desktopImg from './illustration-sign-up-desktop.svg';
import mobilImg from './illustration-sign-up-mobile.svg';
import successIcon from './icon-list.svg';

function App() {
  const [email, setEmail] = useState('');
  const [successView, setSuccessView] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const features = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  const handleInput = (e) => {
    setEmail(e.target.value);
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!re.test(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  const handleSubmit = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (re.test(email)) {
      setSuccessView(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleDismiss = () => {
    setEmail('');
    setSuccessView(false);
    setIsTouched(false);
  };

  if (!successView) {
    return (
      <div className='container'>
        <div className='left-content'>
          <div className='title'>
            <h1>Stay updated!</h1>
          </div>
          <div className='main-text'>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </div>
          <ul className='list'>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className='mail-text'>
            <label htmlFor='input'>Email address</label>
            {!isValidEmail && isTouched && <p>Valid email required</p>}
          </div>
          <input
            className={
              !isValidEmail && isTouched
                ? 'email-input__invalid'
                : 'email-input'
            }
            id='input'
            onChange={handleInput}
            onBlur={() => setIsTouched(true)}
            value={email}
            type='text'
            placeholder='email@company.com'
          />
          <button className='btn-submit' onClick={handleSubmit}>
            Subscribe to monthly newsletter
          </button>
        </div>
        <picture>
          <source media='(max-width:375px)' srcset={mobilImg} />
          <img className='img-newsletter' src={desktopImg} alt='newsletter' />
        </picture>
      </div>
    );
  }

  return (
    <div className='success-container'>
      <img className='success-icon' src={successIcon} alt='success-icon' />
      <h1 className='success-title'>Thanks for subscribing! </h1>
      <p className='success-text'>
        A confirmation email has been sent to{' '}
        <span className='success-mail'>{email}</span>. Please open it and click
        the button inside to conform your subscribtion.
      </p>
      <button className='btn-dismiss' onClick={handleDismiss}>
        Dismiss message
      </button>
    </div>
  );
}

export default App;
