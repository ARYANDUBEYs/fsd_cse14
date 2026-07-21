function sayHello (name) {
    console.log(`Hello ${name}`);
}

const sayHi = (name) => {
    console.log(`Hi ${name}`);
};

const sum = (a,b) => {
    return a+b ;
};

const find_sum = (a,b) => a+b;

console.log("sum=",sum(2,4));
console.log("sum=",find_sum(5,6))
sayHello("Bhatu");
sayHi("Chatu");
