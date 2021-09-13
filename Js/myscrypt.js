

const icons = 
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


/* 
    -Milestone 1
    Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

    -Milestone 2
    Coloriamo le icone per tipo

    -Milestone 3
    Creiamo una select con i tipi di icone e usiamola per filtrare le icone 
    
*/

// prendo la col su HTML
let iconsCol = document.getElementById("icons-col");

// creo una funzione che mostri tutti gli oggetti dell'array su HTML
const printOnThePage = ((array , col) => {
    let htmlContent = '';

    array.forEach((element) => {
        const { family, name, prefix, type} = element;

        htmlContent += 
        `
        <div>
            <i class="${family} ${prefix}${name}"></i>
            <h5 class="icon-title">${name} -${type}</h5>
        </div>
        `
    });

    col.innerHTML = htmlContent;
});

// funzione che divide gli oggetti nell'array per proprieta
const getTypesElement = ((array, property) => {
    const types = [];

    array.forEach((element) => {
        if(!types.includes(element[property])){
            types.push(element[property]);
        }
    });
    return types;
});








printOnThePage(icons,iconsCol);

