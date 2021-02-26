let strength = 100;

const addStrength = () => {
  strength += 1;
  return strength;
};

const minusStrength = () => {
  strength -= 10;
  return strength;
};

const gainStrength = (e) => {
  const targetId = e.target.id;

  if (targetId === 'runAway') {
    document.querySelector('#strengthScore').innerHTML = `<h4>${addStrength()}</h4>`;
  } else if (targetId === 'violence') {
    document.querySelector('#strengthScore').innerHTML = `<h4>${minusStrength()}</h4>`;
  }
};

export default gainStrength;
