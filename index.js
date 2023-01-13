const counter = document.querySelector('.counter')
const back = document.querySelector('.load-back')
const front = document.querySelector('.load-front')

console.log("happy")

let idx = 0;

update()

function update(){
    counter.innerText = idx + '%'
    front.style.width = idx +'%'
    idx++
    if(idx < 101){
        setTimeout(update, 40)
    }
    if(idx == 100){
        counter.style.color = 'green'
    }
}
