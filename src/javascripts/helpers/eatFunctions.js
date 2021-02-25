const eatFood = (e) => {
  const targetId = e.target.id;
  let full = [];
  let fullness = 100;

  if (targetId === 'healthyFood') {
    full.push(fullness += 10);
  } else if (targetId === 'unhealthyFood') {
    full -= 3;
  }
  console.warn(full);
  // if (targetId === 'healthyFood') {
  //   if (fullness === 100) {
  //     document.querySelector('#fullScore').innerhtml = '';
  //   } else {
  //     fullness += 10;
  //     document.querySelector('#fullScore').innerhtml = `<p>${fullness}</p>`;
  //   }
  // } else if (targetId === 'unhealthyFood') {
  //   fullness -= 3;
  //   document.querySelector('#fullScore').innerhtml = `<p>${fullness}</p>`;
  // }
};

export default eatFood;
