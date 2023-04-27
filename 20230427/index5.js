// 우리가 window를 생략해서 사용했던것과 같이 window.console.log()  == console.log()
// global과 module을 생략해서 작성할 수 있다.
// module.exports === exports

exports.obj = { a: 1 };
exports.add = () => {
    return 2;
}
function add2() {
    console.log('난 함수');
}
exports.add2 = add2;