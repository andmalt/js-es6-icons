

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

const colors = ['red','blue','green','orange','yellow','teal'];
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

// creo un arrow function che mostri tutti gli oggetti dell'array su HTML
const printOnThePage = ((array , col) => {
    let htmlContent = '';

    array.forEach((element) => {
        const { family, name, prefix, type ,color} = element;

        htmlContent += 
        `
        <div>
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <h5 class="icon-title">${name} -${type}</h5>
        </div>
        `
    });

    col.innerHTML = htmlContent;
});


// arrow function che divide gli oggetti nell'array per proprieta
const getTypesElement = ((array, property) => {
    const types = [];

    array.forEach((element) => {
        if(!types.includes(element[property])){
            types.push(element[property]);
        }
    });
    return types;
});



// arrow function che colora gli oggetti dell'array per tipo
const colorized = ((array , colors)=>{

    const colorizedArray = array.map((element) => {
        const indexOfType = types.indexOf(element.type);
        if(indexOfType !== -1){
            element.color = colors[indexOfType];
        }
        console.log(element.color);
        return element;
    });
    
    return colorizedArray;
});

function addOption(array, select){

    array.forEach((element)=>{
        select.innerHTML += `<option value="${element}">${element}</option>`;
    })
}


const types = getTypesElement(icons,"type");
const select = document.getElementById('my-select');
colorized(icons,colors);
printOnThePage(icons,iconsCol);
addOption(types, select);

function filterdElement(array, filter){
    if(filter === "all"){
        return array;
    }

    return array.filter((element)=> element.type == filter);
}

select.addEventListener('change', () => {
    const selectValue = select.value;

    const filterdIcons = filterdElement(icons , selectValue);

    printOnThePage(filterdIcons, iconsCol);
});