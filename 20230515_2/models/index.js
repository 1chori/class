const { userInit, userList, userSelect, userInsert, userDelete, userPwChange, userRefresh } = require('./usersModel');

userInit();

// async function test() {
//     userRefresh('aaa', '2h92c131');
// };

// test();

module.exports = { userList, userSelect, userInsert, userDelete, userPwChange, userRefresh };