
window.addEventListener("load", function(){
let generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", function(){setLottoBalls(7);});
});

function setLottoBalls(size){
let template = document.querySelector("#lotto-ball-template");
let lottoBallDiv = template.content.children[0];
let lottoWrapperDiv = document.querySelector(".lotto-wrapper");
lottoWrapperDiv.innerHTML = "";
let lottoNumbers = setLottoNumbers(7);

for(let i=0; i < lottoNumbers.length; i++){
    let cloneDiv = document.importNode(lottoBallDiv, true);
    cloneDiv.querySelector(".number").textContent = lottoNumbers[i];
    lottoWrapperDiv.appendChild(cloneDiv);
    moveBall(cloneDiv, i*500); 
}
}

function moveBall(target, delay){
setTimeout(function(){target.classList.add("active");}, delay);
}

function setLottoNumbers(size){
let numbers = [];
for(let i=1; i <= 45; i++) {numbers.push(i);} // 1 ~ 45 까지 번호 배열 생성
//shuffle
for(let i=0; i < numbers.length; i++){
    let j = Math.floor(Math.random() * numbers.length);
//swap
    let tmp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = tmp;
}
    //slice
    return numbers.slice(0, size);
}