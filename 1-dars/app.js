let permission = window.confirm("Son topish o'yiniga xush kelibsiz!\n0 dan 20 magacha bo'lgan oralig'idagi sonlardan birini kiriting va o'ylangan sonni toping!\n\nO'yinni boshlashga rozimisiz?");

let number = Math.floor(Math.random() * 21);
let entered_number;
let attempt = 1;

if (permission){
    entered_number = prompt("Ajoyib O'yin boshlandi!\n\n0 dan 20 magacha bo'lgan oralig'idagi sonlardan birini kiriting:");
   
        while(entered_number!=number){
            
            if(entered_number>number){
                entered_number = prompt("Kechirasiz o'ylangan son kiritgan soningizdan kichikroq\nIltimos, qayta urinib ko'ring!\n\n0 dan 20 magacha bo'lgan oralig'idagi sonlardan birini kiriting:")
            }else{entered_number = prompt("Kechirasiz o'ylangan son kiritgan soningizdan kattaroq\nIltimos, qayta urinib ko'ring!\n\n0 dan 20 magacha bo'lgan oralig'idagi sonlardan birini kiriting:")};
            attempt++;
        }
        alert(`Tabriklayman siz ${attempt} ta urinishda yutingiz!\nO'ylangan son rostdan ham ${number} soniga teng edi!)`)
}
else{
    window.location.href = "https://fulfiledu.uz";
}