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

const eatFood = (e) => {
  const targetId = e.target.id;

  if (targetId === 'healthyFood') {
    document.querySelector('#fullScore').innerHTML = `<h4>${addFull()}</h4>`;
    document.querySelector('#eatArea').innerHTML = '<i class="fas fa-apple-alt"></i>';
  } else if (targetId === 'unhealthyFood') {
    document.querySelector('#fullScore').innerHTML = `<h4>${minusFull()}</h4>`;
    document.querySelector('#eatArea').innerHTML = '<i class="fas fa-cookie-bite"></i>';
  }

  if (full >= 100) {
    document.querySelector('#fullScore').innerHTML = `<h4>${fullMessage}</h4>`;
    full = 100;
  }
};

export default eatFood;
