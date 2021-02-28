let energy = 50;

const addNap = () => {
  energy += 50;
  return energy;
};

const addSleep = () => {
  energy += 60;
  return energy;
};

const sleepMessage = 'TIME TO GET UP';

const gainEnergy = (e) => {
  const targetId = e.target.id;

  if (targetId === 'nap') {
    document.querySelector('#energyScore').innerHTML = `<h4>${addNap()}</h4>`;
    document.querySelector('#energyArea').innerHTML = '<i class="fas fa-cloud-moon"></i>';
  } else if (targetId === 'deepSleep') {
    document.querySelector('#energyScore').innerHTML = `<h4>${addSleep()}</h4>`;
    document.querySelector('#energyArea').innerHTML = '<i class="fas fa-bed"></i>';
  }

  if (energy >= 100) {
    document.querySelector('#energyScore').innerHTML = `<h4>${sleepMessage}</h4>`;
    energy = 100;
  }
};

export default gainEnergy;
