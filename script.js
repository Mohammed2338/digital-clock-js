function clock() {
  let hours = document.getElementById("hr");
  let minutes = document.getElementById("min");
  let seconds = document.getElementById("sec");
  let am = document.getElementById("am");
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let am_pm = "AM";

  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs > 12) {
    hrs = hrs - 12;
    am_pm = "PM";
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
  am.innerText = am_pm;
}
clock();
setInterval(clock, 1000);

function set() {
  let  x = document.getElementById("select1").value;

  let  y = document.getElementById("select2").value;
  let  z = document.getElementById("select3").value;
  let  a = document.getElementById("select4").value;
  let  hour = new Date().getHours();

  if (x == hour) {
    document.getElementById("box5").style.backgroundImage = "url(./pic.png)";
    document.getElementById("grab").innerText = "Wake Up !!";
    document.getElementById("box6").innerText = "Good Morning !!";
  } else if (y == hour) {
    document.getElementById("box5").style.backgroundImage = "url(./lunch2.png)";
    document.getElementById("grab").innerText = "GOOD AFTER NOON";
    document.getElementById("box6").innerText = "Its Lunch Time !!";
  } else if (z == hour) {
    document.getElementById("box5").style.backgroundImage = "url(./nap2.svg)";
    document.getElementById("grab").innerText = "Good Evening !!";
    document.getElementById("box6").innerText = "its Nap Time !!";
  } else if (a == hour) {
    document.getElementById("box5").style.backgroundImage = "url(./night2.svg)";
    document.getElementById("grab").innerText = "Good Night !!";
    document.getElementById("box6").innerText = " Go For Sleep !!";
  }
  getOption();
}
function getOption() {
  let  e = document.getElementById("select1");
  let  text1 = e.options[e.selectedIndex].text;

  let  f = document.getElementById("select2");
  let  text2 = f.options[f.selectedIndex].text;

  let  g = document.getElementById("select3");
  let  text3 = g.options[g.selectedIndex].text;

  let  h = document.getElementById("select4");
  let  text4 = h.options[h.selectedIndex].text;

  let  idExist = document.getElementById("timings");
  if (idExist) {
    idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}<br> Sleep Time :${text4}`;
  }
}
