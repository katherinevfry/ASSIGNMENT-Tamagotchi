import eatFood from './eatFunctions';
import gainStrength from './fightFunctions';
import haveFun from './playFunctions';
import gainEnergy from './sleepFunctions';

const buttonClicks = () => {
  document.querySelector('#eat').addEventListener('click', eatFood);
  document.querySelector('#play').addEventListener('click', haveFun);
  document.querySelector('#fight').addEventListener('click', gainStrength);
  document.querySelector('#sleep').addEventListener('click', gainEnergy);
};

export default buttonClicks;
