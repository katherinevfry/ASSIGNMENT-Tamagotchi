const pageBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div id='eatDiv'>
  <h2>EAT</h2>
  <h5>FULLNESS</h5>
  <h4 id='fullScore'>100</h4>
  <hr>
  <div class='foodContainer'>
    <span id='eatArea' style='font-size: 48px'></span>
  </div>
  <div class='buttonArea'>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='healthyFood'>HEALTHY FOOD</button>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='unhealthyFood'>UNHEALTHY FOOD</button>
  </div>
</div>`;

  document.querySelector('#play').innerHTML = `<div id='playDiv'>
  <h2>PLAY</h2>
  <h5>FUN</h5>
  <h4 id='funScore'>50</h4>
  <hr>
  <div class='funContainer'>
    <span id='funArea' style='font-size: 48px'></span>
  </div>
  <div class='buttonArea'>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='superFun'>SUPER FUN</button>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='slightlyFun'>SLIGHTLY FUN</button>
  </div>
</div>`;

  document.querySelector('#fight').innerHTML = `<div id='fightDiv'>
  <h2>FIGHT</h2>
  <h5>STRENGTH</h5>
  <h4 id='strengthScore'>100</h4>
  <hr>
  <div class='strengthContainer'>
    <span id='fightArea' style='font-size: 48px'></span>
  </div>
  <div class='buttonArea'>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='runAway'>RUN AWAY</button>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='violence'>COMMIT VIOLENCE</button>
  </div>
</div>`;

  document.querySelector('#sleep').innerHTML = `<div id='sleepDiv'>
  <h2>SLEEP</h2>
  <h5>ENERGY</h5>
  <h4 id='energyScore'>50</h4>
  <hr>
  <div class='sleepContainer'>
    <span id='energyArea' style='font-size: 48px'></span>
  </div>
  <div class='buttonArea'>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='nap'>NAP</button>
    <button type='button' class='btn btn-outline-dark shadow rounded' id='deepSleep'>DEEP SLEEP</button>
  </div>
</div>`;
};

document.querySelector('#progress').innerHTML = `
<nav>
    <span id="header">
    <h1 class="title">Tamagucci</h1>
    </span>
</nav>`;

export default pageBuilder;
