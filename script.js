
const myList = document.querySelector('ul')
const showAll = document.querySelector('.menu-mostrar-tudo')
const mapearTudo = document.querySelector('.mapear-tudo')
const somarTodosValor = document.querySelector('.somar-todos-valor')
const filtrarVegan = document.querySelector('.filtrar-vegan')

function valorMoeda(value){
    const  valueFormatado = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return valueFormatado
}


function showAllMenu(productArray) {
    let myli = ''

    productArray.forEach(product => {
        myli += `
        <li >
             <img src=${product.src}>
             <p>${product.name}</p>
             <p class="itemPreço">R$ ${valorMoeda(product.price)}</p>
             
        </li>
        `
    })
    myList.innerHTML = myli
}
function mapEverything() {
    const mapDiscount = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAllMenu(mapDiscount)

}

function addItAllUp() {
    const addAllUp = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    myList.innerHTML = `
          <li >
             <p>O valor total da sua compra foi esse R$ ${valorMoeda(addAllUp)}</p>
          </li>
     `
}

function filtrarLanches (){
   const filterSnack = menuOptions.filter((product) => product.vegan=== true)
 
    showAllMenu(filterSnack)
}

showAll.addEventListener('click', () => showAllMenu(menuOptions))
mapearTudo.addEventListener('click', mapEverything)
somarTodosValor.addEventListener('click', addItAllUp)
filtrarVegan.addEventListener('click',filtrarLanches)
