// 제일 많이 사용할 구문
// 개발자는 객체를 잘 사용하면 된다

// if문 비교문
if(false){
    // 여기 있는 구문을 실행시키는 조건은
    // if() 괄호 안에 true냐 false의 차이로 실행을 시킨다
    console.log()
    // 여기 내용들을 실행시키고 싶을 때도 있고, 그렇지 않을 때도 있는데...
    // 불이 꺼져있으면 실행될 일이 없다
    // 괄호 안에 연산자를 넣어주면 값을 비교하면서 실행시키거나 실행 안되게 할 수 있다
}


let age = 1;
let age2 = 10;

if(age < age2){
    console.log('내가 젊구나')
}

if (age > age2) {
    console.log('내가 젊구나')
} else {
    console.log('내가 늙었구나')
}

if(age == age2){
    // if문이 맞으면 코드 실행
    console.log('우린 동갑이야');
}else if(age > age2){
    // if문이 틀리면 여기 조건 확인 후 맞으면 실행
    console.log('내가 형이야');
}else{
    // else if문의 조건이 틀리면 실행
    console.log('형님!');
}

// 반복문 for문
// 여러번 반복 실행해야 할 구문이 있을 때 사용하고 조건에 만족될 때까지 실행된다
// 변수 선언, 값 확인, for문 안에 있는 구문 실행 후 값을 증가시킨다
// 증가시킨 다음 비교하고 true면 다시 실행하고 비교문이 false가 되면 반복문 종료
// 무한 반복은 사이트 터진다
let b = 5;
for(let a = 1; a < b; a++){
    console.log(a);
}


// 구구단 만들기
let y;
let x;
for(let x = 1; x < 10; x++){
    for(let y = 1; y < 10; y++){
        console.log(x*y);
    }
}

let u;
let i;

for(let u = 1; u < 10; u++){

}






let z;
let s;

for(z = 1; z < 61; z++){
    if (z%3 === 0) {
        console.log(z%3);
    } else {
        console.log('짝');
    }
}

// 1%3 = 1
// 2%3 = 2
// 3%3 = 0
// 4%3 = 1


let students = ['가','나','다','라','마','바','사',];
let awards = ['나','라','사'];

for(let k = 0; k < students.length; k++){
    let student = students[k];
    if(awards.includes(student)){
        console.log(student);
    }
}

