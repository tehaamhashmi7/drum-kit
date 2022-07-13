w_but = document.querySelectorAll(".drum")

for(let i = 0; i < w_but.length; i++) {
    w_but[i].addEventListener("click", function() {
        buttonAnimation(this.innerHTML)
        switch (this.innerHTML) {
            case 'w':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
            case 'a':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;  
            case 'j':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break; 
            case 'k':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;  
            case 'l':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;           
            default:
                alert('not present')
                break;
        }
    })

}

document.addEventListener('keydown', function(event) {
    buttonAnimation(event['key'].toLowerCase())
    switch (event['key'].toLowerCase()) {
        case 'w':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;  
        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break; 
        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;  
        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;           
        default:
            console.log(`${event['key']} pressed`)
            break;
    }        
})


function buttonAnimation(key) {
    button = document.querySelector(`.${key}`)
    button.style.border = "15px solid #95989e";
    setTimeout(() => {
        button.style.border = "10px solid #404B69";
    }, 750);
}