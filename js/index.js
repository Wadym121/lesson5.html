// Декларуємо змінні:
// var -старе, не використовуємо
// let - звичайна змінна
// const - стала змінна
// Primity Date Types
//Number
//String
//Boolean -true,falce
//null - пусто
//underfined -обєкт
//Symbol - унікальний незмінний індетифікатор


let bestGreetings = 'Helo';
alert (bestGreetings);
bestGreetings='Javascript';
alert (bestGreetings);

const age = Number(prompt('Enter your age'));
alert('Your age is:' + age);

const nextAge = addOne(age);
alert('next year you will be:' + nextAge);

//Logical operators
// > < >= <= != == === || &&
if (age>=18) {
alert('Your are adult!');
} else {
    alert('Your are underaged!');
}
function addOne(num){
    const incremented = num +1;
    return incremented;
}
