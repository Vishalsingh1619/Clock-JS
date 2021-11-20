const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hh = dateToday.getHours();
  let mm = dateToday.getMinutes();
  let ss = dateToday.getSeconds();

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
  }

  hh = hh < 10 ? '0' + hh : hh;
  mm = mm < 10 ? '0' + mm : mm;
  ss = ss < 10 ? '0' + ss : ss;
  hour.textContent = hh + ' hour';
  minute.textContent = mm + ' mins';
  seconds.textContent = ss + ' secs';
}, 1000);

function result() {
  let waketime = document.getElementById('wake').value;
  let lunchtime = document.getElementById('lunch').value;
  let naptime = document.getElementById('nap').value;

  if (waketime == '' || lunchtime == '' || naptime == '') {
  } else {
    var wwtim = (document.getElementById('waket').innerText =
      'wake up time is : ' + waketime);
    var lltim = (document.getElementById('luncht').innerText =
      'lunch time is : ' + lunchtime);
    var natim = (document.getElementById('napt').innerText =
      'Dinner time is : ' + naptime);

    document.getElementById('output').style.display = 'block';
  }
}