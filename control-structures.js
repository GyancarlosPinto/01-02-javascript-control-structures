for (let i = 0; i < 5; i++) {
    console.log('Number ' + i);;
}

function hello(name) {
if (name === 'Alice') {
    return `Hello ${name}!`;
} else {
    return 'Hello Bob!';
}
}

console.log(hello());
console.log(hello('Alice'));