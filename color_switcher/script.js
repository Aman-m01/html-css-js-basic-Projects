const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(e){    //function(e)->callback
        // console.log(e)
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id ;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor ="rgb(242, 242, 127)" ;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = "rgb(203, 165, 171) ";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = "rgb(144, 144, 248)";
        }
        if(e.target.id === 'white'){
            
        body.style.backgroundColor ="rgb(202, 193, 193)" ;
        };
       
        
    });
});