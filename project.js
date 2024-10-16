const mesaj={ 
    arr1:['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'],
    arr2:['poti', 'trebuie', 'ar fi cazul', 'nu e nevoie'],
    arr3: ['sa faci', 'sa te relaxezi', 'sa cumperi', 'sa te duci'],
    arrDo: ['curatenie', 'antrenament', 'ordine', 'mancare'],
    arrRelax: ['acasa', 'la o cafea', 'in parc', 'cu prietenii'],
    arrBuy: ['apa', 'paine', 'croissante', 'ciocolata', 'banane', 'rosii', 'hartie igienica', 'nisip pentu pisici'],
    arrGo: ['la antrenament', 'la plimbare', 'la magazin', 'la facultate', 'la easybox', 'la Constanta'],
}

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const zi= getRandom(mesaj.arr1);
const necesitate= getRandom(mesaj.arr2);
const actiune= getRandom(mesaj.arr3);

let continuare= [];
if (actiune==='sa faci') {
    continuare.push(getRandom(mesaj.arrDo));
}

if (actiune==='sa te relaxezi') {
    continuare.push(getRandom(mesaj.arrRelax));
}

if (actiune==='sa cumperi') {
    continuare.push(getRandom(mesaj.arrBuy));
}

if (actiune==='sa te duci') {
    continuare.push(getRandom(mesaj.arrGo));
}

if (continuare[0]==='la magazin') {
    let lastArr=[];
    const numarProduse=Math.floor(Math.random() * mesaj.arrBuy.length);
    continuare.push(mesaj.arr3[2], getRandom(mesaj.arrBuy));
}

console.log(zi + ' ' + necesitate + ' ' + actiune + ' ' + continuare.join(' ') + '.');