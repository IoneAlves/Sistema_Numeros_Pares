var numbers = [];

// ********** FUNÇÕES PARA INCLUSÃO DE DATA **********

// Cadastro de Número: adicionar um númerno no array

let numberToAdd = document.querySelector('#number');
const btnAdd = document.querySelector('#insert');

function evenNumber () {
    var number = parseInt(numberToAdd.value);
   
    if (!numbers.includes(number)) {
        if(number % 2 == 0){
            numbers.push(number);
            numberToAdd.value = '';
            showDataArray();
        }else{
            numberToAdd.value = `Número Ímpar Ou Texto É Invalido`;
        }          
    } else {
        numberToAdd.value = `O ${number} já existe no array`;
    } 
}

btnAdd.addEventListener('click', evenNumber);

// Consulta os números:  retornar o array gerado na tela

let dadosArray = document.querySelector('#dadosArray');
const btnSearch = document.querySelector('#consultar');

function showDataArray(){
    dadosArray.innerHTML = '';

    for (let number of numbers) {
        let viewNumber = document.createElement('span');
        viewNumber.innerHTML = number + ' | ';
        dadosArray.appendChild(viewNumber);
    }
}

btnSearch.addEventListener('click', showDataArray);

// Consulta os números: limpa números na tela
const btnClean = document.querySelector('#clean');

function clearArea () {
    number.value = '';
    dadosArray.innerHTML = '';
};

btnClean.addEventListener('click', clearArea);

// Excluir um número: exclui o número conforme pesquisa

let numToDel = document.querySelector('#numToExclude');
const btnExclude = document.querySelector('#removeNum');
let respExclude = document.querySelector('#respDel');

function excludeNum () {
    let numDel = parseInt(numToDel.value);

    if (numbers.includes(numDel)) {
        respExclude.innerHTML = ``;
        let indexNum = numbers.indexOf(numDel)
        numbers.splice(indexNum, 1);
        numToDel.value = '';
        showDataArray();
    } else {
        respExclude.innerHTML = `${numDel} - NÃO existe no array`;
    };     
}

btnExclude.addEventListener('click', excludeNum);

// Alterar um número por outro que número existente no array

let currentNum = document.querySelector('#currentNum');
let newNum = document.querySelector('#newNum');
const btnReplace = document.querySelector('#replace');

function replaceNum () {
    let number = parseInt(currentNum.value);
    let indexNum = numbers.indexOf(number);
    let numChange = parseInt(newNum.value);

    if (numbers.indexOf(numChange) != -1) {
        newNum.value = `Esse número já existe no array. Tente outro.`
    } else {
        if (numChange % 2 == 0 && indexNum != -1) {
            numbers[indexNum] = numChange;
            currentNum.value = '';
            newNum.value = '';
            dadosArray.innerHTML = '';
            showDataArray();
        } else {
            newNum.value = `Número Ímpar Não É Válido`;
        }
    }   
}

btnReplace.addEventListener('click', replaceNum);

// Pesquisar um número na lista: número existente no array

let numExists = document.querySelector('#numExists');
let respNumSearch = document.querySelector('#respNumSearch');
const btnLastSearch = document.querySelector('#lastSearch');

function searchNum () {
    let number = parseInt(numExists.value);
    let response;
    let updateArray = numbers;

    if (updateArray.includes(number)) {
        let indexNum = updateArray.indexOf(number);
        response = `${updateArray[indexNum]} - existe no array e está na posição ${indexNum}`;
    } else {
        response = `${number} - NÃO existe no array`;
    };

    respNumSearch.innerHTML = `${response}`;
}

btnLastSearch.addEventListener('click', searchNum);

// ********** MODAL **********

let valueBtn = document.querySelectorAll('.btnAction');
let modal = document.querySelectorAll('.modal');
let areaModal = document.querySelector('.modalArea');

valueBtn[0].addEventListener('click', ()=>{
    areaModal.classList.remove('modalAreaVanish');
    modal[0].classList.toggle('modal');
});

valueBtn[1].addEventListener('click', ()=>{
    areaModal.classList.remove('modalAreaVanish');
    modal[1].classList.toggle('modal');
});

valueBtn[2].addEventListener('click', ()=>{
    areaModal.classList.remove('modalAreaVanish');
    modal[2].classList.toggle('modal');
});

valueBtn[3].addEventListener('click', ()=>{
    areaModal.classList.remove('modalAreaVanish');
    modal[3].classList.toggle('modal');
});

valueBtn[4].addEventListener('click', ()=>{
    areaModal.classList.remove('modalAreaVanish');
    modal[4].classList.toggle('modal');
});
