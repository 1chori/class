// 모듈이란?
// 모듈은 각각의 파일단위로 구분되어 있고

// 하나의 파일에 기능을 모두 작성해버리면 협업과 수정, 유지보수가 힘들다
// 파일을 규칙에 맞게 나눌수 있으면 나누는 것이 좋다

const BlockClass = [
    {
        name: '안녕',
        age: 1,
        comment: function () {
            console.log(this.name + '이야');
        }
    }, {
        name: '안녕2',
        age: 1,
        comment: function () {
            console.log(this.name + '이야');
        }
    }
]

// 여기서 내용을 작성하고 다른 파일에서 실행시키면 오류가 나는데
// 이 내용을 모듈로 내보내서 다른 파일에서 가져와 모듈화 시켜 사용
// 해당 파일의 리턴값을 내보내줄 수 있다
module.exports = BlockClass;