
var canli = document.querySelector(".mesaj");
var chatTable = document.querySelector(".chatting");
var close = document.querySelector(".up .fa-close");
var metn = document.querySelector("input")
var button = document.querySelector(".fa-sign-in");
var chatzone = document.querySelector(".chat");
var delet = document.querySelector(".material-icons");
var empty = [];



function autoScroll() {
    chatzone.scrollTop = chatzone.scrollHeight;
}
button.addEventListener('click', function () {
    put();
})

canli.addEventListener("click", function () {
    chatTable.style.display = "block";
    canli.style.display = "none";
})
close.addEventListener("click", function () {
    chatTable.style.display = "none";
    canli.style.display = "block";
})
function put() {
    var mesage = metn.value;

    if (mesage[0] == mesage[0].toUpperCase()) {
        var divgirl = document.createElement('div');
        divgirl.classList.add('middle');
        var girlimg = document.createElement('div');
        girlimg.classList.add('img');
        var girlxett = document.createElement('hr');
        girlxett.classList.add('hr');
        var girltext = document.createElement('p');
        girltext.classList.add('girltxt');
        girltext.innerHTML = mesage;
        var clears = document.createElement('div');
        clears.classList.add('clear');

        chatzone.appendChild(divgirl);
        divgirl.appendChild(girlimg);
        divgirl.appendChild(girltext);
        divgirl.appendChild(clears);
        divgirl.appendChild(girlxett);
        divgirl.addEventListener("click", function () {
            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
            }
            else {
                this.classList.add("selected");
                delet.style.display = "block";

            }
        })

        autoScroll();


    } else {
        var boydiv = document.createElement('div');
        boydiv.classList.add('middle1');
        var boyimg = document.createElement('div');
        boyimg.classList.add('img1');
        var xett = document.createElement('hr');
        xett.classList.add('hr');
        var text = document.createElement('p');
        text.classList.add('span');
        text.innerHTML = mesage;
        var clears = document.createElement('div');
        clears.classList.add('clear');





        chatzone.appendChild(boydiv);
        boydiv.appendChild(boyimg);
        boydiv.appendChild(text);
        boydiv.appendChild(clears);
        boydiv.appendChild(xett);
        boydiv.addEventListener("click", function () {
            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
            }
            else {
                this.classList.add("selected");
                delet.style.display = "block";

            }


        })


        autoScroll();

        boydiv.addEventListener('click', function () {
            if (this.style.backgroundColor == '#50575C') {
                this.style.backgroundColor = 'rgb(120, 120, 121)';
                delet.style.display = 'block'
            }
        })





    }
    metn.value = [];
}
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        put();
    }
})

delet.addEventListener("click",function(){
  
    var secilmisler=document.querySelectorAll(".selected");
for(var i=0;i<secilmisler.length;i++){
secilmisler[i].remove();
}


})