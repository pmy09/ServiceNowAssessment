var modal = document.getElementById("modal");
var modal1 = document.getElementById("modal1");
var open = document.getElementsByClassName("open")[0];
var open1 = document.getElementsByClassName("open1")[0];
var close = document.getElementsByClassName("close")[0];
var close1 = document.getElementsByClassName("close1")[0];

open.onclick = function() {
    modal.style.display = "block"
}

open1.onclick = function() {
    modal1.style.display = "block"
}

close.onclick = function() {
    modal.style.display = "none"
}

close1.onclick = function() {
    modal1.style.display = "none"
}

window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
    if (event.target === modal1) {
        modal1.style.display = "none";
      }
}


