let picArr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
let flips = document.querySelector('#flips');
let pics = document.getElementsByTagName('img');

picArr = picArr.map(elm => [elm, Math.random()])
  .sort((a, b) => a[1] - b[1])
  .map(p => p[0]);
console.log(picArr);



for (let i = 0; i < picArr.length; i++) {
  pics[i].src2 = '/img/' + picArr[i] + '.png';
  pics[i].cardID = i;
}

let step = 1;
let p1, p2;
let timer = null;
let steps = 0;
document.addEventListener('click', function (e) {
  switch (step) {
    case 1://first click
      if (e.target.tagName == 'IMG') {
        e.target.src = e.target.src2;
        p1 = e.target;
        step = 2;
      }
      break;
    case 2://second click
      if (e.target.tagName == 'IMG') {
        e.target.src = e.target.src2;
        p2 = e.target;
        step = 3;
      }
      timer = setTimeout(check, 1000);
      break;
    case 3://compare cards
      clearTimeout(timer);
      check();
      break;


  }



});


function check() {
  if (p1.src2 === p2.src2) {
    p1.replaceWith(document.createElement('span'))
    p2.replaceWith(document.createElement('span'))
  }
  else {
    p2.src = p1.src = '/img/0.png';
    steps++;
    flips.textContent = steps;
  }
  step = 1;
  if (document.getElementsByTagName('img').length == 0) {

  }
}



