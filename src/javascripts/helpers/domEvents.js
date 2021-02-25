import eatFood from './eatFunctions';

// const domEvents = () => {
//   document.querySelector('#app').addEventListener('click', (e) => {
//     if (e.target.id.includes('eat')) {
//     } else if (e.target.id.includes('play')) {
//       console.warn('play!');
//     } else if (e.target.id.includes('fight')) {
//       console.warn('fight!');
//     } else if (e.target.id.includes('sleep')) {
//       console.warn('sleep!');
//     }
//   });
// };

// export default domEvents;
const buttonClicks = () => {
  document.querySelector('#eat').addEventListener('click', eatFood);
};

export default buttonClicks;
