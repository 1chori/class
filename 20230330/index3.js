// promise 객체 : 비동기 처리를 가능하게 해주는 객체
// node.js에서 많이 사용한다
// 비동기 처리를 할 때, promise 객체를 사용한다

function testPromise(num) {
    // 전달하는 함수값에 resolve, reject 두 가지 매개변수를 받는다
    // resolve() 처리가 완료되면 반환하는 함수
    // reject() 처리가 오류나면 반환하는 함수
    return new Promise(function (res, rej) {
        try {
            if (num > 10) rej({ date: '숫자큼' });
            // if의 중괄호가 없으면 바로 밑의 줄까지 조건문 영역
            console.log(num);
            // 데이터를 받아온다 가정하자
            // 데이터를 가져오는 시간이 좀 걸리는데 다 가져오고 작업을 진행시켜야 할 때
            setTimeout(() => {
                res(num);
            }, num * 1000);
        } catch (error) {
            rej(error);
        }

    })
}

// testPromise(8).then(function (date) {
//     console.log(date);
//     // 데이터를 가져오고 처리할 구문을 여기에 작성하면 된다
//     return testPromise(date);
//     // res를 실행하면 then() 메서드가 실행되고
//     // rej를 실행하면 catch() 메서드가 실행된다
// }).then(function (date) {
//     console.log(date);
// }).catch(function (err) {
//     console.log(err);
// })

// then과 catch 안쓰면 async과 await를 쓰면된다
// 둘 중 하나만 쓰자. 절대로 같이 쓰지 말자. Promise를 잘 모른다는 뜻

async function asyncFunc() {
    // 이제 왠만하면 try catch로 작업의 오류를 예외 상황을 잡으면서 작업하자
    try {
        let temp = await testPromise(5);
        console.log(temp);
        temp = await testPromise(temp);
        console.log(temp);
        // await + promise = promise를 기다리고 resolve 값을 반환
        // async와 await는 짝이다
    } catch (error) {

    }
}
asyncFunc();