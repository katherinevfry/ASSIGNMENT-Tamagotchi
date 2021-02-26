import eatFood from './eatFunctions';

const buttonClicks = () => {
  document.querySelector('#eat').addEventListener('click', eatFood);
};

export default buttonClicks;
