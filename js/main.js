var soc = document.querySelectorAll('.img_soc');
var soces = document.querySelector('.soces');
var menu2 = document.querySelector('.menu2');
var menu21 = document.querySelector('.menu21');
var item1 = document.querySelector('.item1');
var item2 = document.querySelector('.item2');
var item3 = document.querySelector('.item3');
var item4 = document.querySelector('.item4');
var item5 = document.querySelector('.item5');
var item6 = document.querySelector('.item6');
var item7 = document.querySelector('.item7');
var item8 = document.querySelector('.item8');
var item9 = document.querySelector('.item9');
var page11_items = document.querySelector('.page11_items');
var text11 = document.querySelector('.text11');
var button1 = document.querySelector('.button1');
var text12 = document.querySelector('.text12');
var button2 = document.querySelector('.button2');
var text13 = document.querySelector('.text13');
var button3 = document.querySelector('.button3');
var text14 = document.querySelector('.text14');
var button4 = document.querySelector('.button4');
var text15 = document.querySelector('.text15');
var button5 = document.querySelector('.button5');
var text16 = document.querySelector('.text16');
var button6 = document.querySelector('.button6');
var text17 = document.querySelector('.text17');
var button7 = document.querySelector('.button7');
var text18 = document.querySelector('.text18');
var button8 = document.querySelector('.button8');
var text19 = document.querySelector('.text19');
var button9 = document.querySelector('.button9');
var page11_item = document.querySelectorAll('.page11_item');
var img13 = document.getElementById('img13');
var img110 = document.getElementById('img11');
var img120 = document.getElementById('img12');
var img130 = document.getElementById('img130');
var img14 = document.getElementById('img14');
var img15 = document.getElementById('img15');
var img16 = document.getElementById('img16');
var img17 = document.getElementById('img17');
var img18 = document.getElementById('img18');


// script header

soc.forEach(element=> {
   element.addEventListener('mouseover', function(){
      soces.classList.toggle('red');
   });
});

soc.forEach(element=> {
   element.addEventListener('mouseout', function(){
      soces.classList.toggle('red');
      soces.classList.remove('red1');
   });
});

soc.forEach(element=> {
   element.addEventListener('click', function(){
      soces.classList.toggle('red1');
   });
});

// script menu

function menu() {
   menu21.classList.toggle('left');
}

// script page11


function show1() {
   img110.classList.toggle('img_auto');
   item1.classList.toggle('page11_item0');

   item1.classList.toggle('bg_no');
   
   item1.classList.toggle('width1');
   item2.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');

   item2.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');
   
   text11.classList.toggle('dis_bl');
   button1.classList.toggle('dis_bl');
}

function show2() {
   img120.classList.toggle('img_auto');
   item2.classList.toggle('bg_no');

   item2.classList.toggle('page11_item0');

   item2.classList.toggle('width');
   item1.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');
   
   item1.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');

   text12.classList.toggle('dis_bl');
   button2.classList.toggle('dis_bl');
}

function show3() {
   img130.classList.toggle('img_auto');
   item3.classList.toggle('bg_no');

   item3.classList.toggle('page11_item0');
   
   item3.classList.toggle('width2');
   item2.classList.toggle('dis_no');
   item1.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');
   
   item2.classList.toggle('no_ac');
   item1.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');
   
   text13.classList.toggle('dis_bl');
   button3.classList.toggle('dis_bl');
}

function show4() {
   img14.classList.toggle('img_auto');
   item4.classList.toggle('bg_no');

   item4.classList.toggle('page11_item0');

   item4.classList.toggle('width1');
   item2.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item1.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');
   
   item2.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item1.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');
   
   text14.classList.toggle('dis_bl');
   button4.classList.toggle('dis_bl');
}

function show5() {
   img15.classList.toggle('img_auto');
   item5.classList.toggle('bg_no');

   item5.classList.toggle('page11_item0');

   item5.classList.toggle('width');
   item2.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item1.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');
   
   item2.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item1.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');
   
   text15.classList.toggle('dis_bl');
   button5.classList.toggle('dis_bl');
}

function show6() {
   img16.classList.toggle('img_auto');
   item6.classList.toggle('bg_no');

   item6.classList.toggle('page11_item0');

   item6.classList.toggle('width2');
   item2.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item1.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');
   
   item2.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item1.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');
   
   text16.classList.toggle('dis_bl');
   button6.classList.toggle('dis_bl');
}

function show7() {
   img17.classList.toggle('img_auto');
   item7.classList.toggle('bg_no');

   item7.classList.toggle('page11_item0');

   item7.classList.toggle('width1');
   item2.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item1.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');
   
   item2.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item1.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');
   
   text17.classList.toggle('dis_bl');
   button7.classList.toggle('dis_bl');
}

function show8() {
   img18.classList.toggle('img_auto');
   item8.classList.toggle('bg_no');

   item8.classList.toggle('page11_item0');

   item8.classList.toggle('width');
   item2.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item1.classList.toggle('dis_no');
   item9.classList.toggle('dis_no');
   
   item2.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item1.classList.toggle('no_ac');
   item9.classList.toggle('no_ac');
   
   text18.classList.toggle('dis_bl');
   button8.classList.toggle('dis_bl');
}

function show9() {
   img13.classList.toggle('img_auto');
   item9.classList.toggle('bg_no');

   item9.classList.toggle('page11_item0');

   item9.classList.toggle('width2');
   item2.classList.toggle('dis_no');
   item3.classList.toggle('dis_no');
   item4.classList.toggle('dis_no');
   item5.classList.toggle('dis_no');
   item6.classList.toggle('dis_no');
   item7.classList.toggle('dis_no');
   item8.classList.toggle('dis_no');
   item1.classList.toggle('dis_no');
   
   item2.classList.toggle('no_ac');
   item3.classList.toggle('no_ac');
   item4.classList.toggle('no_ac');
   item5.classList.toggle('no_ac');
   item6.classList.toggle('no_ac');
   item7.classList.toggle('no_ac');
   item8.classList.toggle('no_ac');
   item1.classList.toggle('no_ac');
   
   text19.classList.toggle('dis_bl');
   button9.classList.toggle('dis_bl');
}

var figure = document.querySelector('.figure');

function back() {
   figure.classList.toggle('back');
}
