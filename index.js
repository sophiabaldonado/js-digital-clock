var clocks = document.getElementsByClassName("clock")

// function displayTime(timezone) {
//   rightNow = new Date().toLocaleTimeString("en-US", {timeZone: timezone})
//   document.getElementById(timezone).innerHTML = rightNow
// }

// for (var clock of clocks) {
//   window.setInterval(displayTime(clock.getAttribute("id")), 1000)
// }

function displayPacificTime() {
  var timezone = clocks[0].getAttribute("id")
  var rightNow = new Date().toLocaleTimeString("en-US", {timeZone: timezone})
  document.getElementById(timezone).innerHTML = rightNow
}

function displayDate() {
  var timezone = clocks[0].getAttribute("id")
  var today = new Date().toDateString()
  var dates = document.getElementsByClassName("date")
  for (var day of dates) {
    day.innerHTML = today
  }
}

function displayEasternTime() {
  var timezone = clocks[1].getAttribute("id")
  var rightNow = new Date().toLocaleTimeString("en-US", {timeZone: timezone})
  document.getElementById(timezone).innerHTML = rightNow
}

window.setInterval(displayPacificTime, 1000)
window.setInterval(displayDate, 1000)
window.setInterval(displayEasternTime, 1000)
