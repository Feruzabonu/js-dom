// -----------------TASK_1--------------------------------

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

// -----------------TASK_2--------------------------------

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

// -----------------TASK_3--------------------------------

