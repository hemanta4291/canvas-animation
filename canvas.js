var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(100, 100, 100, 100);
// c.fillRect(200, 200, 100, 100);
// c.fillRect(300, 300, 100, 100);

// line

//c.beginPath();
// c.moveTo(100,100);
// c.lineTo(100, 200);
// c.lineTo(50, 300);
// c.stroke();

// arc/circle


// for( var i = 0; i<200; i++){
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0, Math.PI *2);
//     c.stroke();
// }

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 12;
var dy = (Math.random() - 0.5) * 12;
var radius = 30;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2);
    c.strokeStyle = '#f00'
    c.stroke();
    x = +x + dx;
    y = +y + dy;

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
}
animate();

console.log(window.innerWidth);




var myarr = [0, 2, 5, 78, 98, 45, 12, 54, 74];


var form = document.getElementById("form");
var sub = document.querySelector("#sub");
var items = document.querySelector("#items");
items.className = 'list-group';

form.addEventListener("submit", createli);

function createli(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var input = document.getElementById("name");
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(name));
    items.appendChild(li);
    input.value = '';
    var deletebtn = document.createElement('button');

    deletebtn.className = "btn btn-danger float-right delete";

    deletebtn.appendChild(document.createTextNode('x'));

    li.appendChild(deletebtn);
}

items.addEventListener("click", deletefun);

function deletefun(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure')) {
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}



// portfolio script

const chilbtn = document.querySelector('#prot').children;
const items_filter = document.querySelector('.items').children;


for (let i = 0; i < chilbtn.length; i++) {
    chilbtn[i].addEventListener('click', function () {
        for (let j = 0; j < chilbtn.length; j++) {
            chilbtn[j].classList.remove('active')
        }
        this.classList.add('active')
        const target = this.getAttribute("data-target");
        console.log(items_filter);

        for (let k = 0; k < items_filter.length; k++) {
            items_filter[k].style.opacity = '0.5';
            items_filter[k].style.transition = 'all linear 0.3s';
            items_filter[k].style.transform = 'scale(0.8)';

            if (items_filter[k].getAttribute("data-id") == target) {
                items_filter[k].style.display = 'block';
                items_filter[k].style.opacity = '1';
                items_filter[k].style.transform = 'scale(1)';
            }

            if (target == 'all') {
                items_filter[k].style.display = 'block';
                items_filter[k].style.opacity = '1';
                items_filter[k].style.transform = 'scale(1)';
            }
        }


    })
}

console.log(chilbtn);