const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

console.log(buttons);

buttons.forEach(function (button) {
    // console.log(button)
    button.addEventListener('click', function (event){
        console.log(event)
        console.log(event.target)
        // switch (event.target.id) {
        //     case event.target.id === 'grey':
        //         body.style.backgroundColorcolor = event.target.id;
        //         break;
            
        //     case event.target.id === 'pink':
        //         body.style.backgroundColor = event.target.id;
        //         break;
            
        //     case event.target.id === 'blue':
        //         body.style.backgroundColor = event.target.id;
        //         break;

        //     case event.target.id === 'yellow':
        //         body.style.backgroundColor = event.target.id;
        //         break;

        //     default:
        //         alert("unkown color is selected.");
        //         console.log("unknown color is selected.");
        //         break;
        // }
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'pink'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        else{
            body.style.backgroundColor = 'white';
        }
    })
});
