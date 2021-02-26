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

const haveFun = (e) => {
  const targetId = e.target.id;

  if (targetId === 'superFun') {
    document.querySelector('#funScore').innerHTML = `<h4>${addFun()}</h4>`;
    document.querySelector('#funArea').innerHTML = '<i class="fas fa-book-dead"></i>';
  } else if (targetId === 'slightlyFun') {
    document.querySelector('#funScore').innerHTML = `<h4>${minusFun()}</h4>`;
    document.querySelector('#funArea').innerHTML = '<i class="fas fa-chess"></i>';
  }

  if (fun >= 100) {
    document.querySelector('#funScore').innerHTML = `<h4>${playMessage}</h4>`;
    fun = 100;
  }
};

export default haveFun;
