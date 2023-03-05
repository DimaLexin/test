// let inputNumber = document.querySelector('.input-number')

// let btnTimer = document.querySelector('.btn')

// let elementDiv = document.querySelector('.element')

// let Timer = 0;

// let intervalID;

// function onClick() {
//     console.log('старт');
//     elementDiv.textContent = Math.round (inputNumber.value);
//     Timer =  elementDiv.textContent;
//     clearInterval(intervalID);
//     intervalID = setInterval(startTimer, 1000);   
// };

// function startTimer () {
//     // console.log('Пришел Timer  ' + Timer);
//     // console.log('Пришел FuncTimer  ' + FuncTimer);
    
//     if (Timer > 0) {
//         elementDiv.textContent = elementDiv.textContent-1;
//         // FuncTimer--;
//         Timer --;
//         // console.log('Присвоен Timer  ' + Timer);
//         // console.log('Присвоен FuncTimer  ' + FuncTimer);
//         // console.log('Присвоен DIV  ' + elementDiv.textContent);

//     } 
//     else {
//         console.log('Мы на дне  ' + elementDiv.textContent);
//         clearInterval(intervalID);
//     }
    
//    };

// btnTimer.addEventListener('click', onClick);

// let timeoutID;
// let timeSet = 5000;

// let h2 =document.createElement('h2')
// h2.textContent='Введите информацию';
// document.body.append(h2);


// let inputWord = document.createElement('input');
// inputWord.placeholder = 'Введите информацию';
// document.body.append(inputWord);



// inputWord.addEventListener('input', CountDown);

// function CountDown () {
//          clearTimeout(timeoutID);
//          timeoutID = setTimeout (reCopy, timeSet); 
// }

// function reCopy ()  {
//         h2.textContent = inputWord.value;
//         clearTimeout(timeoutID);
// }

// const fullname = 'Дмитрий Михалович Лексин'
// const surname = 'Лексин'
// const surnameIndex = fullname.indexOf(surname);
// console.log(surnameIndex);
// if (surnameIndex>0) {
// console.log(`Фамилия начинается с индекса ${surnameIndex}`);
// console.log(surname +' '+ fullname.replace(surname,' ').trim());}

// const numbers = [0,1,2,3,4,5];
// const array2 = numbers.splice(3);
// console.log(array2);


// const numbersRevers = numbers.reverse();
// numbers.slice();

// console.log(numbers);
// numbers.splice(4,0,4,5);
// console.log(numbers);
// const first = numbers.shift();

// while (numbers.length)  {
//         console.log(`удалили еще один элемент ${numbers.pop()}`);
// }

// const cartItems = [
//         {name: 'Гречка', price: 18, quantaty: 1 },
//         {name: 'Рис', price: 18, quantaty: 1 },
//         {name: 'Гречка', price: 18, quantaty: 1 },
// ];

// // const cartTotal = cartItems.reduce (
// //         (tota, item) => tota + item.price * item.quantaty, 0);
// //         console.log(cartTotal);

// cartItems.forEach((cartItem, number) => {
//         console.log(`Покупка № ${number+1}: ${cartItem.name}`);
// });



// console.log(students.find (students=>students.name ==='Вася'&& students.age === 18 ));
// students.findIndex (students=>students.name ==='Вася'&& students.age === 18 );
// students.every (students=>students.age < 30 );
// students.some (students=>students.name ==='Ваня');

// const kids =students.filter(students=>students.age<18);
// students.map(student=>student.name);

parseEmployeersData(`
        Тиунов Тимофей  Сергеевич,  системный архитетктор
        Иванов Иван Иванович  ,  frontend-разработчик `
);

function parseEmployeersData(dataString) {
        return dataString
        .split('\n')
        .filter(line => line.trim().lenght > 0)
        .map(line => {
            const [fullName, occupation] = line
                  .split(',')
                  .map(str =>str.trim())
                  .filter(text =>text.lenght >0);

            const [surname, name, middlename] = fullName
                  .split(' ')
                  .filter(text =>text.lenght >0);
        return {
                surname, name, middlename, occupation
        };
        })
}