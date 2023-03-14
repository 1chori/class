// 오늘의 과제
// 1. 가위바위보 20판. 게임 시작 전 배팅금액 2000원 이상 입력하는데 그 외 값을 입력하면 다시 입력 -> 자본금 2만원 들고 시작
// 2. 가위바위보 하고 묵찌빠 이기면 배팅한 금액의 * 2로 판돈 준다
// 지면 마이너스 배팅한 금액의 *2
// 종료조건 20판 다 끝나거나 파산
// 소지금이랑 몇판했는지 알려주기



let value = prompt('가위바위보를 할까요? 어떤걸 낼건가요?')


switch (value) {
    case '가위':
        mySelect = 0;
        break;
    case '바위':
        mySelect = 1;
        break;
    case '보':
        mySelect = 2;
        break;
    default:
        alert('제대로 선택하라고!')
        break;
}

// 컴퓨터도 선택. 가위 : 0, 바위 : 1, 보 : 2
// 이길 때까지 반복하고 싶은데...
// 내가 지는 경우 : mySelect - computerSelet = -1 && -2
let computerSelect = parseInt(Math.random()*3);
let play = mySelect - computerSelect;
while(play < 0){
    if (mySelect === 0) {
        if(computerSelect === 0){
            value = prompt('상대방도 가위를 냈네요. 다시!');
        } else if(computerSelect === 1){
            alert('졌습니다');
        } else {
            alert('이겼습니다');
        }
    } else if(mySelect === 1){
        if(computerSelect === 0){
            alert('이겼습니다');
        } else if(computerSelect === 1){
            value = prompt('상대방도 바위를 냈네요. 다시!');
        } else {
            alert('졌습니다');
        }
    } else if(mySelect === 2){
        if(computerSelect === 0){
            alert('졌습니다');
        } else if(computerSelect === 1){
            alert('이겼습니다');
        } else {
            value = prompt('상대방도 보를 냈네요. 다시!');
        }
    }
}
    