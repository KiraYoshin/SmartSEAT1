function changeSeat(seat) {
  if (!seat.classList.contains("yellow") && !seat.classList.contains("red")) {
    seat.classList.add("yellow"); // Green → Yellow
  } 
  else if (seat.classList.contains("yellow")) {
    seat.classList.remove("yellow");
    seat.classList.add("red"); // Yellow → Red
  } 
  else {
    seat.classList.remove("red"); // Red → Green
  }
}
