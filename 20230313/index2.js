// 업다운 게임(숫자 맞추기) 만들어보기

// 1. 플레이어 지정
// 2. 플레이어는 선택할 수 있고, 컴퓨터는 랜덤값
// 3. 플레이어가 선택할 수 있는 제어문

let player;
let computer = parseInt(Math.random() * 99 + 1);

let count = 0;  // 시도를 몇번 할건지 선택

let max = 100;  // 플레이어가 선택 가능한 최대 숫자
let min = 0;  // 플레이어가 선택 가능한 최소 숫자

let subText = '';  // 컴퓨터가 알려줄 문구
let maxCount = parseInt(prompt('게임 몇번 할래?'));  // 게임횟수 입력

while(player !== computer && count < maxCount){
    // ES6에서 문자열을 사용할 때 편하게 사용할 수 있는 기법
    // 템플릿 리터럴 문자를 다룰 때 줄바꿈 같은걸 편하게 사용할 수 있게 해준다.
    //`백틱 
    // ${변수}문자열
    // 문자를 작성할 때 \n 줄내림을 해준다.
    player = prompt(`${subText}\n숫자를 입력하세요 \n 최소 : ${min} | 최대 : ${max} | 남은 회수 : ${maxCount - count}`);

    // player = parseInt(player);
    // 입력된 값이 숫자인지 확인. 문자쓰면 안되니까
    // isNaN 숫자가 아닌 값을 입력했는지?
    if(isNaN(player)){
        subText = '숫자 입력';
        // 다시 게임을 시작해야하는데 밑에 작성된 코드를 읽지 않게 할 수 없을까?
        continue; // 다시 시작
        // continue 구문부터 밑으로 읽지 않고 다시 반복문 시작점으로 돌아간다
    }
        // 최소와 최대 사이의 값인지 확인
    if(min >= player || max <= player){
        subText = `입력값 확인해 최소 : ${min} | 최대 : ${max}`
        continue;
    }

    if(player > computer){
        // max 최대값을 다시 겹치지 않게 입력 해준다.
        max = player;
        subText = '업';
    } else if(player < computer){
        // min 최소값을 다시 겹치지 않게 입력 해준다.
        min = player;
        subText = '다운';
    } else {
        count = count + 1;
        console.log(`${count}번 시도해서 너 맞췄어 축하해`);
        // 게임 끝
        break;
    }
    
    // 게임 횟수 증가해야함
    count++;
    if(count >= maxCount){
        // 실패
        console.log(`실패`)
    }

}