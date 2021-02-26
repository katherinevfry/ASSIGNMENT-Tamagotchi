const pageBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div id='eatDiv'>
<h2>Eat</h2>
<h5>Fullness</h5>
<h4 id='fullScore'>100</h4>
<hr>
<button type='button' class='btn btn-outline-dark' id='healthyFood'>Healthy Food</button>
<button type='button' class='btn btn-outline-dark' id='unhealthyFood'>Cookies</button>
</div>`;

  document.querySelector('#play').innerHTML = `<div id='playDiv'>
  <h2>Play</h2>
<h5>Fun</h5>
<h6 id='funScore'></h6>
<hr>
<button type='button' class='btn btn-outline-dark' id='superFun'>Super Fun</button>
<button type='button' class='btn btn-outline-dark' id='slightlyFun'>Slightly Fun</button>
</div>`;

  document.querySelector('#fight').innerHTML = `<div id='fightDiv'>
  <h2>Fight</h2>
<h5>Strength</h5>
<h6 id='strengthScore'></h6>
<hr>
<button type='button' class='btn btn-outline-dark' id='runAway'>Run Away</button>
<button type='button' class='btn btn-outline-dark' id='violence'>Commit violence</button>
</div>`;

  document.querySelector('#sleep').innerHTML = `<div id='sleepDiv'>
  <h2>Sleep</h2>
<h5>Energy</h5>
<h6 id='energyScore'></h6>
<hr>
<button type='button' class='btn btn-outline-dark' id='nap'>Nap</button>
<button type='button' class='btn btn-outline-dark' id='deepSleep'>deepSleep</button>
</div>`;
};

export default pageBuilder;
