const main = document.querySelector('.main');
const keys = main.querySelectorAll('.keys');
for(var key = 0 ; key<keys.length ; key++){
    keys[key].addEventListener('click', e=>{
    if(e.target.matches('button')){
        const actionKey = e.target.dataset.action;
        if(actionKey){
            if(actionKey === 'add'||
            actionKey === 'multiply'||
            actionKey === 'subtract'||
            actionKey === 'divide'){
                console.log('operator key');
                e.target.classList.add('is-depressed')
            }
            if(actionKey === 'decimal'){
                console.log('decimal key')
            }
            if(actionKey === 'clear'){
                console.log('clear key');
                // document.getElementById('display').innerHTML= '0';
                display.textContent = '0';
               
            }
            if(actionKey === 'calculate'){
                console.log('equal key')
            }
        }
        else console.log('number key')
    }
})
}

const display = document.querySelector('.calc-display');

for(var key = 0 ; key<keys.length; key++){
    keys[key].addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const actionKey = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent

            if (!actionKey){
                if(displayedNum === '0'){
                    display.textContent = keyContent
                }
                else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if(actionKey === 'decimal'){
                display.textContent = displayedNum + '.';

            }
        }
    })
}
