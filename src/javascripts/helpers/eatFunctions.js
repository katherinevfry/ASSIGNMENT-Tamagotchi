let full = 100;

const addFull = () => {
  full += 10;
  return full;
};

const minusFull = () => {
  full -= 3;
  return full;
};

const fullMessage = 'YOU ARE FULL';

const healthyIcon = () => {
  const healthyIcons = ['<i class="fas fa-carrot text-center"></i>', '<i class="fas fa-apple-alt text-center"></i>', '<i class="fas fa-lemon text-center"></i>', '<i class="fas fa-fish text-center"></i>'];
  const randomFood = healthyIcons[Math.floor(Math.random() * healthyIcons.length)];
  return randomFood;
};

const unhealthyIcon = () => {
  const unhealthyIcons = ['<i class="fas fa-hamburger text-center"></i>', '<i class="fas fa-cookie-bite text-center"></i>', '<i class="fas fa-ice-cream text-center"></i>', '<i class="fas fa-pizza-slice text-center"></i>'];
  const randomTreat = unhealthyIcons[Math.floor(Math.random() * unhealthyIcons.length)];
  return randomTreat;
};

const eatFood = (e) => {
  const targetId = e.target.id;

  if (targetId === 'healthyFood') {
    document.querySelector('#fullScore').innerHTML = `<h4>${addFull()}</h4>`;
    document.querySelector('#eatArea').innerHTML = healthyIcon();
  } else if (targetId === 'unhealthyFood') {
    document.querySelector('#fullScore').innerHTML = `<h4>${minusFull()}</h4>`;
    document.querySelector('#eatArea').innerHTML = unhealthyIcon();
  }

  if (full >= 100) {
    document.querySelector('#fullScore').innerHTML = `<h4>${fullMessage}</h4>`;
    full = 100;
  }
};

export default eatFood;
