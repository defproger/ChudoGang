const open = element => element.classList.add("active");

// Первый вариант
const p1 = document.getElementById('pp1');
const p2 = document.getElementById('pp2');
// open(p1);

// Второй вариант
const p = document.getElementsByClassName('popup_div');
// open(p[1]);