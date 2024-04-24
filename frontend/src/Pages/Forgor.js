import React from 'react';
import Title from '../Components/Title';

const Forgor = () => {
  return (
    <div className='container'>
      <Title title={'Forgot Password'} />
      <div className='forgot signup'>
        <p>Enter your email address below and we'll send you a link to reset your password.</p>
        <form>
          <label htmlFor="email" className="textfield">Email:
              <input type="text" id="username" name="username" className="input-field" placeholder='Email@example.com' required/>    
          </label>
          <button className='button'>Send Reset Email</button>
        </form>
      </div>
    </div>
  );
};

export default Forgor;