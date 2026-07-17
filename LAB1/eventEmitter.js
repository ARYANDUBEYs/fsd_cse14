import {EventEmitter} from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`loggedin ${name}`);
}

task.on('greet', sayHi);

task.on('greet', () => {
    console.log("Logged Out");
})

task.once('greet', ()=> 
{
    console.log("System started.......");
})

task.off('greet', () => 
{
    console.log(`Shutting down by ${name}`);
})

task.emit('greet', "Akhil Singh");
task.emit('greet', "Babe");
task.emit('exit', "Mna");