
var clayBtn = document.getElementById("clay-btn");
var clayImgBtn = document.getElementById("clay-img-btn");
var rBtn = document.getElementById("r-btn");
var rImgBtn = document.getElementById("r-img-btn");
var nBtn = document.getElementById("n-btn");
var nImgBtn = document.getElementById("n-img-btn");
var lBtn = document.getElementById("l-btn");
var lImgBtn = document.getElementById("l-img-btn");
var aBtn = document.getElementById("a-btn");
var aImgBtn = document.getElementById("a-img-btn");
var sBtn = document.getElementById("s-btn");
var sImgBtn = document.getElementById("s-img-btn");


var exit;

var modal;


clayBtn.onclick = function() {
    modal = document.getElementById("modal-wrap-clay");
    exit = document.getElementById("exit-clay");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

clayImgBtn.onclick = function() {
    modal = document.getElementById("modal-wrap-clay");
    exit = document.getElementById("exit-clay");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}



rBtn.onclick = function(){
    modal = document.getElementById("modal-wrap-r");
    exit = document.getElementById("exit-r");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

rImgBtn.onclick = function() {
    modal = document.getElementById("modal-wrap-r");
    exit = document.getElementById("exit-r");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

nBtn.onclick = function(){
    modal = document.getElementById("modal-wrap-n");
    exit = document.getElementById("exit-n");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

nImgBtn.onclick = function() {
    modal = document.getElementById("modal-wrap-n");
    exit = document.getElementById("exit-n");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

lBtn.onclick = function(){
    modal = document.getElementById("modal-wrap-l");
    exit = document.getElementById("exit-l");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

lImgBtn.onclick = function() {
    modal = document.getElementById("modal-wrap-l");
    exit = document.getElementById("exit-l");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

aBtn.onclick = function(){
    modal = document.getElementById("modal-wrap-a");
    exit = document.getElementById("exit-a");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

aImgBtn.onclick = function() {
    modal = document.getElementById("modal-wrap-a");
    exit = document.getElementById("exit-a");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

sBtn.onclick = function(){
    modal = document.getElementById("modal-wrap-s");
    exit = document.getElementById("exit-s");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}

sImgBtn.onclick = function() {
    modal = document.getElementById("modal-wrap-s");
    exit = document.getElementById("exit-s");
    modal.style.display = "block";
    exit.onclick = function() {
        modal.style.display = "none";
      }
}




window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}