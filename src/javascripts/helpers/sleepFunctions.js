let energy = 50;

const addNap = () => {
  energy += 50;
  return energy;
};

const addSleep = () => {
  energy += 60;
  return energy;
};

const gainEnergy = (e) => {
  const targetId = e.target.id;

  if (targetId === 'nap') {
    document.querySelector('#energyScore').innerHTML = `<h4>${addNap()}</h4>`;
  } else if (targetId === 'deepSleep') {
    document.querySelector('#energyScore').innerHTML = `<h4>${addSleep()}</h4>`;
  }
};

export default gainEnergy;
