let full = 100;

const addFull = () => {
  full += 10;
  return full;
};

const minusFull = () => {
  full -= 3;
  return full;
};

// const fullMessage = 'YOU ARE FULL';

const eatFood = (e) => {
  const targetId = e.target.id;

  if (targetId === 'healthyFood') {
    document.querySelector('#fullScore').innerHTML = `<h4>${addFull()}</h4>`;
  } else if (targetId === 'unhealthyFood') {
    document.querySelector('#fullScore').innerHTML = `<h4>${minusFull()}</h4>`;
  }
};

export default eatFood;
