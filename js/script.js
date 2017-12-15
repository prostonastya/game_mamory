var container = document.getElementsByClassName('container')[0]; 
// var body = document.getElementsByTagName('body')[0];
var width = container.appendChild(document.createElement('input'));
var height = container.appendChild(document.createElement('input'));
var button = container.appendChild(document.createElement('button'));
var table = (document.createElement('table'));
var tr = document.createElement('tr');
var td = document.createElement('td');
var tdAll = document.getElementsByTagName('td');
var numbers = [];
var obj = {};
var arrCheck = [];
var info = document.createElement('div');
info.className = 'info';



button.innerText = 'Create game';
button.addEventListener('click', showTable);
table.addEventListener('click', showNumber);

// показ таблицы
function showTable() {

    for (let i = 0; i < height.value; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (let i = 0; i < width.value; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }

    container.appendChild(info);
    info.innerText = 'Remember numbers';

    container.appendChild(table);
    setNumbers();
}

// для рандомного цвета
function getRandomColor() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

// заполняет ячейки цифрами
function setNumbers(){
    for(let i = 0; i < tdAll.length/2; i++) {
        numbers[i] = i + 1;       
    }

    var doubleNumb = [].concat(numbers, numbers);   
    
    for(let i = 0; i < tdAll.length; i++) {
        let rand = Math.floor(Math.random() * doubleNumb.length);       
        obj[i] = doubleNumb[rand];
        tdAll[i].innerHTML = obj[i];
        doubleNumb.splice(rand,1);        
    }
    
    setTimeout(hide, 3000);
}

// скрывает номера
function hide(){
    for(let i = 0; i < tdAll.length; i++){
        tdAll[i].style.color = 'transparent';        
    } 
}

// показывает цифры при клике
function showNumber() {   
    event.target.style.color = 'black';
    addToCheck(event.target);
    
}

// проверка цифр попарно
function addToCheck(elem){
    if (arrCheck.length < 2) {
        // проверка, чтоб при нажатии дважды на одну и туже ячейку не было GREAT.
        // надо подумать, чтоб не проверяло уже открытые ячейки 
        if (arrCheck[0] !== elem){
            arrCheck.push(elem);
        }        
    }

    if (arrCheck.length == 2) {
        if(arrCheck[0].innerText == arrCheck[1].innerText){
            console.log('GREAT');
            info.innerText = 'Match';
            arrCheck[0].className = 'opened';
            arrCheck[1].className = 'opened';            
            arrCheck.splice(0,2);
        } else {
            console.log('false');
            info.innerText = 'Try again';
            setTimeout(hidePart, 1500);
            arrCheck.splice(0,2);
        }        
    }   
    
}
function hidePart(){
    for(let i = 0; i < tdAll.length; i++){
        if (tdAll[i].className != 'opened'){
            tdAll[i].style.color = 'transparent'; 
        } 
    }
}


// в массив не только 2 шт, а все, что успел открыть полльзователь, и там сравнивать попарно....может быть

