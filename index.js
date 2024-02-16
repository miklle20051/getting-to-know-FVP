//Задание 1.
const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach(name => {
    console.log(`Привет, ${name}`);
});

//Задание 2.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(num => num * 10));

//Задание 3.
numbers = [5, 12, 8, 130, 44];
console.log(numbers.filter(num => num > 10));

//Задание 4.
const shoppingСart = [
    { product: 'Телефон', price: 50000, quantity: 1 },
    { product: 'Чехол', price: 1500, quantity: 2 },
    { product: 'Зарядное устройство', price: 2500, quantity: 1 }
  ];
  
  console.log(`Общая стоимость продаж: ${shoppingСart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)}`);