const MINE_1 = 3;
const MINE_2 = 7;
const MINE_3 = 9;

var miner    = Math.round(Math.random()*10);

function move_left(){
  if (miner > 1) {
    miner--;
  }else {
  miner = 10;
  }
  show()
}
function move_right(){
  if (miner < 10) {
    miner++;
  }else {
  miner = 1;
  }
  show()
}
function show(){
  var div = document.getElementById('map'); // conectam variabila du ID
  div.innerHTML = ``;  // curatam totul ce era pina acum in div
for (var step = 1 ; step<=10; step++){
  if ( step == miner) {
    var content = `<div class="miner"></div>`;   // template string
  }else {
    var content = ``;
  }
  div.innerHTML +=
    `<div class="grass">
      ${content}
    </div>`
  ;

}
for (var step = 1 ; step<=10; step++){
  if ( step == bomb) {
    var content = `<div class="bomb"></div>`;   // template string
  }else {
    var content = ``;
  }
  div.innerHTML +=
    `<div class="bomb">
      ${content}
    </div>`
  ;

}
}
show();
