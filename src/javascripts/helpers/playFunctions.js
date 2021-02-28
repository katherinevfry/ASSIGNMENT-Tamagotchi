let fun = 50;

const addFun = () => {
  fun += 50;
  return fun;
};

const minusFun = () => {
  fun -= 2;
  return fun;
};

const playMessage = 'GET SOME REST';

const funIcon = () => {
  const funIcons = ['<i class="fas fa-guitar text-center"></i>', '<i class="fas fa-camera-retro text-center"></i>', '<i class="fas fa-book-dead text-center"></i>', '<i class="fas fa-chess text-center"></i>'];
  const randomActivity = funIcons[Math.floor(Math.random() * funIcons.length)];
  return randomActivity;
};

const haveFun = (e) => {
  const targetId = e.target.id;

  if (targetId === 'superFun') {
    document.querySelector('#funScore').innerHTML = `<h4>${addFun()}</h4>`;
    document.querySelector('#funArea').innerHTML = funIcon();
  } else if (targetId === 'slightlyFun') {
    document.querySelector('#funScore').innerHTML = `<h4>${minusFun()}</h4>`;
    document.querySelector('#funArea').innerHTML = funIcon();
  }

  if (fun >= 100) {
    document.querySelector('#funScore').innerHTML = `<h4>${playMessage}</h4>`;
    fun = 100;
  }
};

export default haveFun;
