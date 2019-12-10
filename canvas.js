
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
    var dx = (Math.random()-0.5)* 12;
    var dy = (Math.random()-0.5)* 12;
    var radius = 30;

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);
        c.beginPath();
        c.arc(x,y,radius,0, Math.PI *2);
        c.strokeStyle='#f00'
        c.stroke();
        x =+ x+dx;
        y =+ y+dy;

        if(x + radius >innerWidth || x-radius < 0){
            dx = -dx;
        }
        if(y + radius>innerHeight || y-radius<0){
            dy = -dy;
        }
    }
    animate();

    console.log(window.innerWidth);
    