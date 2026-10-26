let html = "";

let arrConcerts = [];

arrConcerts[0] = {
  Performer: "Океан Ельзи",
  Venue: "Палац Спорту (Київ)",
  Date: "31.10.2026"
};

arrConcerts[1] = {
  Performer: "The Hardkiss",
  Venue: "",
  Date: "26.10.2026"
};

arrConcerts[2] = {
  Performer: "MONATIK",
  Venue: "Stereo Plaza",
  Date: "15.11.2026"
};

arrConcerts[3] = {
  Performer: "Бумбокс",
  Venue: "",
  Date: "20.10.2026"
};

function ras_diff_Days(text) {
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  let date1 = new Date(text.replace(/(\d+)\.(\d+)\.(\d+)/, '$3/$2/$1'));
  date1.setHours(0, 0, 0, 0);

  let timeDiff = date1.getTime() - currentDate.getTime();
  let daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
  
  return daysDiff;
}

function vivod(item, i, array) {
  let text = item['Date'];
  let diffDays = ras_diff_Days(text);
  
  let rowStyle = "";
  let message = "";

  if (diffDays === 0) {
    message = "Сьогодні йде концерт!";
    rowStyle = "style='background:yellow;'";
  } else if (diffDays === 5) {
    message = "Сьогодні останній термін придбання квитка!";
    rowStyle = "style='background:yellow;'";
  } else if (diffDays > 0) {
    message = `До концерту залишилось днів: ${diffDays}`;
  } else {
    message = "Концерт вже відбувся";
  }

  let venueVal = item['Venue'];
  if (!venueVal || venueVal.trim() === "") {
    venueVal = "Невідома адреса проведення концерту";
    rowStyle = "style='background:red;'"; 
  }

  html = html + `<tr ${rowStyle}>`;
  html = html + "<td>" + item['Performer'] + "</td>";
  html = html + "<td>" + venueVal + "</td>";
  html = html + "<td>" + item['Date'] + "</td>";
  html = html + "<td>" + message + "</td>";
  html = html + "</tr>";
}

function ras() {
  html = "<table class='result-table'>";
  html = html + "<tr><td>Виконавець</td><td>Місце проведення</td><td>Дата концерту</td><td>Повідомлення</td></tr>";
  arrConcerts.forEach(vivod);
  html = html + "</table>";
  document.getElementById('rezult').innerHTML = html;
}

document.getElementById("runTask1").onclick = ras;