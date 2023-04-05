// Class ES6부터 지원
// Class를 사용하면 상속을 지원한다.
// 코드의 재사용을 더 높일 수 있다

class student {
    // constructor가 클래스의 생성자 함수
    // constructor() 생성자 함수를 작성하지 않으면 빈 생성자 함수가 자동을 생긴다
    constructor(age, phone, city) {
        this.age = age;
        this.phone = phone;
        this.city = city;
    }
    getInfo() {
        return '나이는 : ' + this.age + '폰번호는 : ' + this.phone + '사는 곳은 : ' + this.city;
    }
}

let st = new student(30, '010 - xxxx - xxxx', '서울');
console.log(st);
console.log(st.age);
console.log(st.getInfo());


class Charactor {
    constructor(hp, mp, atk) {
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
    }
    getState() {
        return this.hp + ',' + this.mp + ',' + this.atk;
    }
    // 정적 메서드 : 일반적으로 공용함수를 만들기 위해 사용
    // 클래스의 인스턴스에서 호출X
    // static 메서드는 클래스를 동적 할당 할 때마다 생성되지 않는다
    // 인스턴스를 생성할 때 더 생성되지 않는다
    static getAtk(n) {
        return n.atk;
    }
}

let ca = new Charactor(100, 100, 100);
console.log(ca);
//console.log(ca.getAtk(1)); // 에러 난다
// 선언한 클래스 안에 
console.log(Charactor.getAtk(ca));  // 100

// -------------------------------------------------------------


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // getter, setter
    // get : 값을 호출할 때 네이밍
    // set : 값을 수정할 때 네이밍
    // 클래스의 값을 가져오거나 설정할 때 getter와 setter를 제공해준다
    // 클래스의 값에 접근할 때 직접 변수에 접근하는 형태가 아닌 get과 set을 통한 접근방법
    // 내부구조를 캡슐화 하는데 좋다
    // 전역적으로 데이터가 사용되지 않게 위험성을 방지해준다.(객체지향)

    get getName() {
        // get은 매개변수를 넣으면 안된다.
        return '제품이름 : ' + this.name;
    }

    set setPrice(price) {
        this.price = price;
    }
}

let pr = new Product('아이폰 14 pro', 150000000);
console.log(pr);
// getter
console.log(pr.getName);
// setter
pr.setPrice = 1000000;
console.log(pr);


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = 'Point';
    static distance(a, b) {
        let dx = a.x - b.x;
        let dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(p1);
console.log(p1.displayName);  // undefined
console.log(p1.distance);  // undefined
console.log(p2.distance);  // undefined
console.log(p2.displayName);  // undefined

console.log(Point.displayName); // Point
console.log(Point.distance(p1, p2)); // 7.07..
