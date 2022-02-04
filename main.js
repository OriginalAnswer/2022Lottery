
window.addEventListener("load", function(){
let generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", function(){setBalls(7);});
});

function setBalls(size){
    let template = document.querySelector("#lotto-ball-template");//template불러오기
    let lottoBallDiv = template.content.children[0];//template는 .content와 함께 사용
    let lottoWrapperDiv = document.querySelector(".lotto-wrapper");
    lottoWrapperDiv.innerHTML = "";
    let lottoNumbers = setNumbers(size);

    for(let i=0; i < lottoNumbers.length; i++){
        let cloneDiv = document.importNode(lottoBallDiv, true);//탬플릿 노드 복제, 자식포함
        cloneDiv.querySelector(".number").textContent = lottoNumbers[i];//복제한 노드의 자식요소".number"에 텍스트 삽입 = 
        lottoWrapperDiv.appendChild(cloneDiv); //숫자가 들어간 탬플릿 복제 노드를 lottoWrapperDiv 안에 추가
        moveBall(cloneDiv, i*500); //(복제 노드, i*500( = 0.5초))를 moveBall 함수로 보냄
    }
}

function moveBall(target, delay){
    setTimeout(function(){target.classList.add("active");}, delay);
}

function setNumbers(size){
    var numbers = [];//배열
    for(let i=1; i <= 45; i++){numbers.push(i);} // 1 ~ 45 까지 번호 배열 생성
    //shuffle
    for(let i=0; i < numbers.length; i++){
        let j = Math.floor(Math.random() * numbers.length);// 랜덤 숫자 * 45
        //swap
        let tmp = numbers[i];//변수 선언
        numbers[i] = numbers[j]; //랜덤 배열로 교환
        numbers[j] = tmp;//재할당
    }
    //slice
    console.log(numbers);
    return numbers.slice(0, size);//numbers 배열의 9번째 숫자까지의 배열 생성( = 복제)
}