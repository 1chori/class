/*
1. 20판의 묵찌빠 게임을 하는데 각자 2만원의 자본금을 가지고 있고 먼저 배팅 금액을 설정한다
    배팅금액은 2000원 이상이며, 2000원 밑이나 다른걸 입력하면 다시 입력한다
2. 배팅 금액을 입력했으면 가위바이보를 진행한다. 단, 무승부일시 다시 진행한다
3. 서로 어떤 것을 냈는지 확인한다.
4. 내가 이겼을 시 : 다시 가위바위보를 했을 때, 컴퓨터가 나랑 같은걸 내면 내가 win, 지면 계속, 이기면 컴퓨터가 주도권 가져간다
*/

let player1; // 가위바위보 플레이어
let player2; // 묵찌빠 플레이어

let computer1; // 가위바위보 플레이어
let computer2; // 묵찌빠 플레이어

let count = 1;  // 게임횟수
let asset = 20000;  // 자본금
let minbet = 2000;  // 최소 배팅금액
let maxbet = 20000;  // 최대 배팅금액
let subText = '';
let winlose = '';

let game1 = true; // 가위바위보 게임
let game2 = true; // 묵찌빠 게임

// let bet = prompt(`${subText}얼마 배팅하시겠습니까?\n최소 : ${minbet}원 | 최대 : ${maxbet}원`);
// let value = prompt(`묵찌빠를 진행하겠습니다.\n 먼저 가위! 바위! 보!`);
let game = prompt(`지금부터 게임을 진행하겠습니다. 준비됬나요?`, `네`);


while(asset > 0 && count <= 20){
    bet = prompt(`${subText}\n얼마 배팅하시겠습니까?\n최소 : ${minbet}원 | 최대 : ${maxbet}원`)
    if (bet >= 2000 && bet <= 20000) {
        //player = prompt(`묵찌빠를 진행하겠습니다.\n 현재 자본금 : ${asset-bet}\n 가위! 바위! 보!`);
    } else if(bet < 2000){
        subText = '최소 배팅 금액은 2000원입니다.';
        continue;
    } else if(isNaN(bet)){
        subText = '숫자만 입력하세요';
        continue;
    } else if(bet > 20000){
        subText = '최대 배팅 금액은 20000원입니다.';
        continue;
    }

    // 가위바위보
    
    player1 = prompt(`가위바위보를 진행하겠습니다.\n가위, 바위, 보 중 하나를 입력하세요.\n 현재 자본금 : ${asset-bet}`);

    while (player1) {
        
        com = parseInt(Math.random()*3);
        while (game1) {
            switch (com) {
                case '가위':
                    computer1 = 0;
                    game1 = false;
                    break;

                case '바위':
                    computer1 = 1;
                    game1 = false;
                    break;

                case '보':
                    computer1 = 2;
                    game1 = false;
                    break;
            
                default:
                    break;
            }
        }

        if (player1 === computer1) {
            player1 = prompt(`비겼습니다. 다시 입력해주세요`)
        } else {
            if (player1 !== computer1) {
                if (player1 == 0 && computer1 == 1) {
                    winlose = 'lose';
                } else if (player1 == 0 && computer1 == 2){
                    winlose = 'win';
                } else if (player1 == 1 && computer1 == 2){
                    winlose = 'lose';
                } else if (player1 == 1 && computer1 == 0){
                    winlose = 'win';
                } else if (player1 == 2 && computer1 == 0){
                    winlose = 'lose';
                } else if (player1 == 2 && computer1 == 1){
                    winlose = 'win';
                }
                
            } else {
                if(winlose = 'win') {
                    asset = asset + (bet * 2);
                }else if (winlose = 'lose') {
                    asset = asset - (bet * 2);
                }
            }
        }
    }

    if(player1 == computerSelect){
        prompt(`비겼습니다. 다시!`);
        continue;
    } else {
        
    }
}

