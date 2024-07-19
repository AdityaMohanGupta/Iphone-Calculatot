let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');


for(let button of buttons){
    button.addEventListener('click',function(e){
        let btntext=e.target.innerText;
        if(btntext=='C'){
            input.value='';
        }
        else if(btntext=='='){
            try{
                input.value=eval(input.value);
            }
            catch(e){
                input.value='Invalid';
            }
            setTimeout(function(){
                input.value='';
            },5000);
        }
        else{
            input.value+=btntext;
        }
    })
}





