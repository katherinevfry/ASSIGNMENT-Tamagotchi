const pageBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div id='eatDiv'>
<h2>Eat</h2>
<h5>Fullness</h5>
<h4 id='fullScore'>100</h4>
<hr>
<div class='foodContainer'>
<span id='eatArea' style='font-size: 48px'></span>
</div>
<div class='buttonArea'>
<button type='button' class='btn btn-outline-dark shadow rounded' id='healthyFood'>Healthy Food</button>
<button type='button' class='btn btn-outline-dark shadow rounded' id='unhealthyFood'>Cookies</button>
</div>
</div>`;

  document.querySelector('#play').innerHTML = `<div id='playDiv'>
  <h2>Play</h2>
<h5>Fun</h5>
<h4 id='funScore'>50</h4>
<hr>
<div class='funContainer'>
<span id='funArea' style='font-size: 48px'></span>
</div>
<div class='buttonArea'>
<button type='button' class='btn btn-outline-dark shadow rounded' id='superFun'>Super Fun</button>
<button type='button' class='btn btn-outline-dark shadow rounded' id='slightlyFun'>Slightly Fun</button>
</div>
</div>`;

  document.querySelector('#fight').innerHTML = `<div id='fightDiv'>
  <h2>Fight</h2>
<h5>Strength</h5>
<h4 id='strengthScore'>100</h4>
<hr>
<div class='strengthContainer'>
<span id='fightArea' style='font-size: 48px'></span>
</div>
<div class='buttonArea'>
<button type='button' class='btn btn-outline-dark shadow rounded' id='runAway'>Run Away</button>
<button type='button' class='btn btn-outline-dark shadow rounded' id='violence'>Commit Violence</button>
</div>
</div>`;

  document.querySelector('#sleep').innerHTML = `<div id='sleepDiv'>
  <h2>Sleep</h2>
<h5>Energy</h5>
<h4 id='energyScore'>50</h4>
<hr>
<div class='sleepContainer'>
<span id='energyArea' style='font-size: 48px'></span>
</div>
<div class='buttonArea'>
<button type='button' class='btn btn-outline-dark shadow rounded' id='nap'>Nap</button>
<button type='button' class='btn btn-outline-dark shadow rounded' id='deepSleep'>Deep Sleep</button>
</div>
</div>`;
};

export default pageBuilder;
