const sum = (a:number, b:number):number => {
    return a + b;
}

console.log(sum(1, 2)); // 3

const handleLog = (message: string): void => {
  console.log(message);
};

handleLog('Hello, TypeScript!'); // Hello, TypeScript!