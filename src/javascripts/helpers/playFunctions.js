let fun = 50;

const addFun = () => {
  fun += 50;
  return fun;
};

const minusFun = () => {
  fun -= 2;
  return fun;
};

const haveFun = (e) => {
  const targetId = e.target.id;

  if (targetId === 'superFun') {
    document.querySelector('#funScore').innerHTML = `<h4>${addFun()}</h4>`;
  } else if (targetId === 'slightlyFun') {
    document.querySelector('#funScore').innerHTML = `<h4>${minusFun()}</h4>`;
  }
};

export default haveFun;
