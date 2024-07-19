//leson20: if-else
let age: number = 20;
if (age > 20) {
  console.log('u30');
} else {
  console.log("u20");
}

//lesson21: switch-case
const age1: number = 19;
switch (age1) {
  case 25:
    console.log("da di lam");
    break;
  case 20:
  case 19:
    console.log("dang la sinh vien");
    break;
  default:
    console.log("default");

}

//lesson22: for
for (let i = 0; i < 10; i++){
  console.log(i);
}

//lesson23: while
let count: number = 0;
while (count <= 20) {
  console.log(count);
  count++;
}

//lesson24: do-while
let count1: number = 20;
do {
  console.log(count1);
  count1--;
} while (count1 > 0)
  
//lesson25: break
let products = [
  { name: "hihi", price: 300 },
  { name: "hihihaha", price: 700 },
  {name: "hihikkk", price: 200}
]
for (let i = 0; i < products.length; i++){
  if (products[i].price == 700) {
    console.log("da tim thay");
    break;
  }
}

//lesson26: continue
let product2s = [
  { name: "hihi", price: 300 },
  { name: "hihihaha", price: 700 },
  {name: "hihikkk", price: 200}
]
for (let i = 0; i < product2s.length; i++){
  if (product2s[i].price == 700) {
    continue;
  }

  console.log(product2s[i]);
}

//lesson27: function
function sum(a: number, b: number): number {
  return a + b;
};

console.log("check sum", sum(6, 9));

const abs = (a: number, b: number) => {
  return Math.abs(a - b);
}

console.log("chek abs : ", abs(2, 5));

//lesson28: function type
const sum3 = (a: number, b: number): number => {
  return a + b;
}

console.log("check sum3: ", sum3(8, 7));

//lesson29: optional parameters
const sum4 = (x: number, y: number, z?: number) => {
  if (z) {
    return x + y + z;
  }
  return x + y;
}

console.log("check sum4: ", sum4(1, 2, 3));