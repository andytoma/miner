const MINE_1 = 3;
const MINE_2 = 7;
const MINE_3 = 9;

var miner    = Math.round(Math.random()*10);
var miner_health = 5;  //viata

function move_left(){
  if (miner == MINE_1 || miner == MINE_2 || miner == MINE_3) {
    miner_health--;
  }
  if (miner > 1) {
    miner--;
  }else {
  miner = 10;
  }
  show()
}
function move_right(){
  if (miner == MINE_1 || miner == MINE_2 || miner == MINE_3){
    miner_health--;
  }
  if (miner < 10) {
    miner++;
  }else {
  miner = 1;
  }

  show()

}

function show(){
  var div = document.getElementById('map'); //conectam div cu elem
    div.innerHTML=``;  //curatam divul
                 //!!!!!!!!MAP!!!!!!!!!!!!//
for(var step = 1; step<=10; step++ ){
    if(step == miner){
  var content =`<div class="miner"></div>`; //template string
 }else {
    var content = ``;
 }
                  //!!!!!!!!BOMB!!!!!!!!!!!!//
  if(step == MINE_1){
  var content_2 = `<div class="bomb"></div>`
  }else {
  var content_2 = ``;
  }
  if(step == MINE_2){
  var content_3 = `<div class="bomb"></div>`
  }else {
  var content_3 = ``;
  }if(step == MINE_3){
  var content_4 = `<div class="bomb"></div>`
  }else {
  var content_4 = ``;
  }
  div.innerHTML += `<div class="grass"> ${content} ${content_2}${content_3}${content_4}</div>`;

}
var div_s = document.getElementById('score');
div_s.innerHTML ="Viata:= " +miner_health;
}
show();
