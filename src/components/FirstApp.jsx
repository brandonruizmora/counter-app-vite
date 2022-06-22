
import PropTypes from 'prop-types';
import { useState } from 'react';

const FirstApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const handleClickAdd = function () {
    setCounter(counter + 1);
  }

  const handleClickSubstract = function () {
    setCounter(counter - 1);
  }

  const handleClickReset = function () {
    setCounter(value);
  }

  return (
    <div className='container'>
      <div className='center-text'>
        <h1>CounterApp</h1>
        <h2 data-testid="counter">{counter}</h2>
        <button type='button' onClick={handleClickAdd}>+1</button>
        <button type='button' onClick={handleClickSubstract}>-1</button>
        <button aria-label='btn-reset' type='button' onClick={handleClickReset}>reset</button>
      </div>
    </div>
  )
}

FirstApp.propTypes = {
  value: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  value: 0
}

export default FirstApp;