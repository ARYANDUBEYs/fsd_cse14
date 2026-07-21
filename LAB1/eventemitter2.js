import {EventEmitter} from 'node:events'
const sayHi = (name) => {
    console.log(`${name} kaisa hai bhidu`);
}

const task = new EventEmitter();

task.on('greet', sayHi);
//task.emit('greet', "Rahul");

task.on('hello', (name) => {
    console.log(`${name} ped laganeka bhidu`);
})
task.emit('hello', "Rahul");
task.once('hello', () => {
    console.log(`Ped lagnelaga bhidu`);
})
task.off('hello', sayHi);
task.emit('hello', "Manish");
task.once('hello', () => {
    console.log(`Ped lagnelaga bhidu`);
})
task.once('exit', (name) => {
    console.log(`${name} ne ped ukhad diya bhidu`);
})
task.emit('exit', "Rana");
task.emit('exit', "lola");