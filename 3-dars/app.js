// -----------------TASK_1 : Arifmetik amal --------------------------------

// let a = prompt("Birinchi sonni kiriting: ");
// while(!Number(a)){
//         a = prompt("Son kiritishingiz kerak.\nQayta urinib ko'ring:")
// }

// let b = prompt("Ikkinchi sonni kiriting: ");
// while(!Number(b)){
//     b = prompt("Son kiritishingiz kerak.\nQayta urinib ko'ring:")
// };

// function task1(a,b) {
//     let result;
//     if(a>b){
//         result = a/b;
//         alert(`Birinchi son ikkichinchi sondan katta bo'lgani uchun, ${a} / ${b} = ${result}`);
//     }else{
//         result = a*b;
//         alert(`Birinchi son ikkichinchi sondan katta bo'lmagani uchun, ${a} * ${b} = ${result}`);
//     }    
// }

// task1(a,b);

// -----------------TASK_2 : Arrayni tekshirish --------------------------------

// let correct_array = [1,3,5,20,3];
// let error_array = ['1',3,'5','five',3];

// const task_2 = (array) =>{

//    let new_array=[];
//    let check=true;
//    let orta_arifmetik=0;

//    for(let i=0;i<array.length;i++){
//        new_array.push(Number(array[i]))
//    };
   
//    for(let i=0; i<new_array.length;i++){
//     if(!new_array[i]){
//         check=false;
//         break;
//     }
//    }

//    if(check){
//        for(let el of new_array){
//            orta_arifmetik+=el;
//        }
//            orta_arifmetik=orta_arifmetik/new_array.length;
//        return `Arrayning o'rta arifmetigi = ${orta_arifmetik} ga teng`;
//    }else{
//        return `Xatolik mavjud!\n${0}`
//    }
// }

// console.log(task_2(correct_array));
// console.log(task_2(error_array));

// -----------------TASK_3 : Palindrom soni --------------------------------

// let number = prompt("son kiriting")
// let array = [];
// let array2 = [];
// let check = false;

// const task_3 = (number)=>{
    
// for(let i=0;i<number.length; i++){
//     array.push(number.charAt(i));
// }
// array2 = [...array];
// array2 = array2.reverse()

// for(let i=0;i<array2.length;i++){
//     if(array2[i]!==array[i]){
//         check = false;
//         break;
//     }else{
//         check = true;
//     }
// }

// if(check){
//     console.log("palindrom")
// }else{
//     console.log("palindrom emas")
// }
// }

// task_3(number);

// -----------------TASK_4 : Array elementini almashtirish --------------------------------

// let array = [1,5,3,0,5,5,0];
// let val = 5;

// const task_4 =(array,val) =>{
//   for(let i=0;i<array.length;i++){
//     if(array[i]==val){
//       array[i]="_";
//     }
//   }
//   console.log(array)
// }

// task_4(array,val);

// -----------------TASK_5 : Digital clock --------------------------------

setInterval(function () {
    const time = document.querySelector(".time");
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day_night = "AM";
    if(hour>12){
        hour = (hour-12);
        if(hour<10){
            hour = "0" + hour;
        }
        day_night = "PM";
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(second<10){
        second = "0" + second;
    }
    time.textContent = hour + ":" + minute + ":" + second + " " + day_night;
})
