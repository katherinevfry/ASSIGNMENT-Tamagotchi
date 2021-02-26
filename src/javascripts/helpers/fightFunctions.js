let strength = 100;

const addStrength = () => {
  strength += 1;
  return strength;
};

const minusStrength = () => {
  strength -= 10;
  return strength;
};

const fightMessage = 'NO MORE FIGHTING';

const gainStrength = (e) => {
  const targetId = e.target.id;

  if (targetId === 'runAway') {
    document.querySelector('#strengthScore').innerHTML = `<h4>${addStrength()}</h4>`;
    document.querySelector('#fightArea').innerHTML = '<i class="fas fa-running"></i>';
  } else if (targetId === 'violence') {
    document.querySelector('#strengthScore').innerHTML = `<h4>${minusStrength()}</h4>`;
    document.querySelector('#fightArea').innerHTML = '<i class="fas fa-skull-crossbones"></i>';
  }

  if (strength >= 100) {
    document.querySelector('#strengthScore').innerHTML = `<h4>${fightMessage}</h4>`;
    strength = 100;
  }
};

export default gainStrength;
