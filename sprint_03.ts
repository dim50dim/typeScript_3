// Task 01
// По нажатию кнопки .b-1 запускается функция f01. Функция должна присвоить переменной s_1 введенный в input.i-1 текст. Тип переменной s_1 задайте самостоятельно. Для проверки выведите s_1 в консоль.

// тут объявляете s_1
let s_1 : string;

function f01 () : void {
let element = document.querySelector('.i-1') as HTMLInputElement;
s_1 = element.value;
   console.log(s_1);
   
}

document.querySelector('.b-1').addEventListener('click', f01);

// Task 02 
// По нажатию кнопки .b-2 запускается функция f02. Функция должна присвоить переменной res_2  ЧИСЛО введенное в input.i-2. Тип переменной res_2 задайте самостоятельно. Для проверки выведите res_2 в консоль.

// тут объявляете res_2
let res_2 : number;

function f02 () : void {
    let element = document.querySelector('.i-2') as HTMLInputElement;
    res_2 = Number(element.value);
    console.log(res_2);
    
}

document.querySelector('.b-2').addEventListener('click', f02);


// Task 03
// Созданы две переменные n_31 и n_31. Напишите функцию f03, которая присваивает в переменную max_3 большее из данных двух переменных значение. Для проверки выведите max в консоль.

let n_31 : number = 22;
let n_32: number = 44;
// тут объявляем max_3
let max_3 : number;

function f03 () : void {
   max_3 = Math.max(n_31,n_32);
   console.log(max_3);
   
}

document.querySelector('.b-3').addEventListener('click', f03);


// Task 04
// Напишите функцию, f04, которая получает два ЧИСЛА из input.i-41 и input.i-41 и меньшее присваивает в переменную min_4. Тип данных min_4 определите самостоятельно. Для проверки выведите min_4 в консоль.

// тут объявляем min_4
let min_4 : number;

function f04 () : void {
   let  firstInput  = document.querySelector('.i-41') as HTMLInputElement;
   let secondInput  = document.querySelector('.i-42') as HTMLInputElement;

   let num1 : number = +firstInput.value;
   let num2 : number = +secondInput.value;

   min_4 = Math.min(num1,num2);
   console.log(min_4);
   
}

document.querySelector('.b-4').addEventListener('click', f04);


// Task 05
// Напишите функцию, f05, которая проверяет что в input.i-51 и input.i-52 введены числа и при положительном результате проверки в переменную sum_5 кладет результат - сумму данных чисел, при отрицательном результате в переменную error_5 (начальное значение всегда false) кладется значение true. Типы данных определите самостоятельно. Выведите переменные в консоль. 

// тут объявляем sum_5
// тут объявляем error_5
let sum_5 : number;
let error_5 : boolean = false;
function f05 () : void {
   let input_1 = document.querySelector('.i-51') as HTMLInputElement;
   let input_2 = document.querySelector('.i-52') as HTMLInputElement;

  let num1 : number = +input_1.value;
  let num2 : number = +input_2.value;

if(!isNaN(num1) && !isNaN(num2)){
    sum_5 = num1 + num2;
    console.log(sum_5);
    
}else{
    error_5 = true;
    console.log(error_5);
    
}

}

document.querySelector('.b-5').addEventListener('click', f05);


// Task 06
// Напишите функцию, f06, что проверяет что в input.i-61 и input.i-62 введены строки, которые можно привести к числам. При положительном результате проверки в переменную sum_6 кладет результат - сумму данных чисел, а в переменную error_6 кладем false, при отрицательном результате в переменную error_6 кладется значение true, а в переменную sum_6 кладем 0. Типы данных определите самостоятельно. Переменную sum_6 выведите в .out-6. Переменную error_6 в консоль.

// тут объявляем sum_6
// тут объявляем error_6
let sum_6 : number;
let error_6 : boolean = false;

function f06 () : void {
    let input_1 = document.querySelector('.i-61') as HTMLInputElement;
    let input_2 = document.querySelector('.i-62') as HTMLInputElement;

    let num1 : number = +input_1.value;
    let num2 : number = +input_2.value;

    if(!isNaN(num1) && !isNaN(num2)){
        sum_6 = num1 + num2;
        error_6;
    }else{
        sum_6 = 0;
        error_6 = true;
        
    }
    document.querySelector('.out-6').textContent = String(sum_6);
    console.log(error_6);
    
   
}

document.querySelector('.b-6').addEventListener('click', f06);


// Task 07
// Функция f07 получает строки из input.i-71 и input.i-72. В переменную max_7 функция должна записать большую из двух строк. Прямым сравнением. Тип переменной max_7 задайте самостоятельно. Выведите переменную max_7 в .out-7.

// тут объявляем max_7
let max_7 : string = '';

function f07 () : void {
    let input_1 = document.querySelector('.i-71') as HTMLInputElement;
    let input_2 = document.querySelector('.i-72') as HTMLInputElement;

    let num1 : string = input_1.value;
    let num2 : string = input_2.value;

    max_7 = (num1.length > num2.length) ? num1 : num2;

    document.querySelector('.out-7').textContent = max_7

    
}

document.querySelector('.b-7').addEventListener('click', f07);


// Task 08
// Функция f08 должна прочитать выбранное value из select.s-8 и записать значение в переменную val_8. Тип val_8 определите самостоятельно. Выведите val_8 в .out-8. 


// тут объявляем val_8
let val_8 : string ;


function f08 () : void {
  let res = document.querySelector('.s-8') as HTMLInputElement;
  val_8 = res.value;
  document.querySelector('.out-8').textContent = val_8;

}

document.querySelector('.b-8').addEventListener('click', f08);

// Task 09
// Создайте переменную val_9 и пропишите ей любое целое число от 2 до 6. Тип данных задайте самостоятельно. Напишите функцию f09, которая будучи запущена сделает option внутри select.s-9 с таким value selected. Значение val_9 выводите в .out-9.

// тут объявляем val_9
let val_9 : number = 5

function f09 () : void {
let select = document.querySelector('.s-9') as HTMLSelectElement;

 select.value = String(val_9)

document.querySelector('.out-9').textContent = String(val_9);
}

document.querySelector('.b-9').addEventListener('click', f09);


// //Task 10
// Создайте переменную res_10 тип boolean, значение false. При изменении состояния checkbox.ch-10 изменяйте содержимое переменной res_10. Если checkbox выбран записывайте true, если нет - false. Выводите res_10 в .out-10.

// тут объявляем res_10
let res_10 : boolean = false;

function f10 () : void {
let check = document.querySelector('.ch-10') as HTMLInputElement;
res_10 = check.checked ? true : false;

document.querySelector('.out-10').innerHTML = String(res_10)
}

document.querySelector('.ch-10').addEventListener('change', f10);


// // Task 11
// Создайте переменную res_11 тип number значение 0. При изменении состояния checkbox.ch-11 изменяйте содержимое переменной res_11. Если checkbox выбран записывайте в res_11 значение value, если нет - 0. Выводите res_11 в .out-11.

// тут объявляем res_11
let res_11 : number = 0;
function f11 () : void {
    let check = document.querySelector('.ch-11') as HTMLInputElement;
   res_11 = check.checked ? Number(check.value) : 0;

    document.querySelector('.out-11').textContent = String(res_11);
}

document.querySelector('.ch-11').addEventListener('change', f11);


// // Task 12
// Создайте переменную res_12 тип number значение 0. При нажатии кнопки .b-12 функция должна читать содержимое переменной res_12 и если она равна 1 то делать checkbox.ch-12 состояние checked, если равна нулю сбрасывать состояние checked. 

// тут объявляем res_12
let res_12 : number = 1;

function f12 () : void {
    let check = document.querySelector(".ch-12") as HTMLInputElement;

if(check) {
    check.checked = res_12 === 1;
}
   
}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
// Функция f13 получает из input.i-13 число и выводит в .out-13 строку вида 43210 т.е. от введенного числа до нуля. Если ввели 5, то вывод должен быть 543210. 

function f13 () : void {
    

}

document.querySelector('.b-13').addEventListener('click', f13);

// Task 14
// Функция f14 получает из input.i-14 число и присваивает переменной res_14 true если введенное число является четным, false если не четным. Переменную res_14 выведите в .out-14.

// тут объявляем res_14


function f14 () : void {
    

}

document.querySelector('.b-14').addEventListener('click', f14);


// Task 15
// Создайте переменную s_15 со значением'cdcdbdcsd'. И переменную res_15. Функция должна считать сколько в переменной s_15 символов 'c'. Количество присваивать в переменную res_15. Функция должна выводить s_15 в .out-151 и res_15 в .out-152.

// тут объявляем s_15
// тут объявляем res_15


function f15 () : void {

}

document.querySelector('.b-15').addEventListener('click', f15);



// Task 16
// Создан элемент input.i-16. При вводе символов в него выводите количество введенных символов в переменную res_16. Выводите переменную res_16 в .out-16. 

// тут объявляем res_16


function f16 () : void {
 
}

document.querySelector('.i-16').addEventListener('input', f16);


// Task 17
// Создайте переменную res_17 тип boolean значение false. Создан элемент input.i-17. Функция при нажатии кнопки читает содержимое res_17 и если значение false то делает input.i-17 disabled. Если true - enabled.

// тут объявляем res_17


function f17 () : void {

}

document.querySelector('.b-17').addEventListener('click', f17);


// Task 18
// Создайте строку переменную s_18 равную '10000'. Создайте переменную count_18 равную 0.  При нажатии кнопки .b-18 запускается функция f18. Функция прибавляет единицу к count_18, а потом s_18[count_18] делает равной единице. Остальные символы строки 0. 
// Т.е. когда count = 0 строка выглядит '10000'
// Т.е. когда count = 1 строка выглядит '01000'
// Т.е. когда count = 2 строка выглядит '00100'
// Т.е. когда count = 3 строка выглядит '00010'
// Т.е. когда count = 4 строка выглядит '00001'
// Выведите count_18 в .out-181 и s_18 в .out-182

// тут объявляем 


function f18 () : void {
    


}

document.querySelector('.b-18').addEventListener('click', f18);

// Task 19
// Создайте с помощью цикла строку s_19 в которой идет ряд 5_x_3_x_1_x_. Т.е. пользователь вводит число, например 5, а функция генерирует строку от 5 до 0 и заменяет четные числа на x. Разделитель подчеркивание. Число функция берет из input.i-19. Выведите строку в .out-19.

// тут объявляем s_19


function f19 () : void {
   
}

document.querySelector('.b-19').addEventListener('click', f19);


// Тask 20
// Создайте переменную s_20 куда положите значение нуль. При нажатии кнопки запускается функция f20, которая получает число с .i-20 и считает сумму ряда чисел от введеного до нуля. Например введено 5, искомая сумма 5 + 4 + 3 + 2 + 1. Сумма присваивается в s_20. Выведите s_20 в .out-20.

// тут объявляем s_20



function f20 () : void {
   

}

document.querySelector('.b-20').addEventListener('click', f20);