//getElementById() element

const element = document.getElementById('blog-title')
console.log(element)

//getElementsByClassName() HTMLCollection

const element1 = document.getElementsByClassName('one')
console.log(element1)

//getElementsByTagName() HTMLCollection

const element2 = document.getElementsByTagName('h1')
console.log(element2)

//querySelector() element

const element3 = document.querySelector('h1')
console.log(element3)

//querySelectorAll() Nodelist (forEach)

const elements = document.querySelectorAll('.one')
elements.forEach(el => console.log(el))

//textContent

//element3.textContent += " Hello Devs!" //Busca o conteúdo do h1 e concatena com o texto que colocarmos
//console.log(element3.textContent)

//innerText (Trocar o texto interno)

//element3.innerText = "Hello Devs!"

//innerHTML (Permite colocar código HTML internamente)

element3.innerHTML = "Hello Devs <small>!!!</small>"

//value

const element4 = document.querySelector('input')
console.log(element4.value)
element4.value = "Another Value"

//--------------------------------------------------------------------------------------------------------------
//Manipulando elementos
//Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

const element5 = document.querySelector('body')

element5.style.backgroundColor = "#f9f3d2"
console.log(element5.style.backgroundColor)

//classList

element5.classList.add('active', 'green')
console.log(element5.classList)
//element5.classList.remove('active')
element5.classList.toggle('active') //Se existir, ele remove, se não existir, ele adiciona

//--------------------------------------------------------------------------------------------------------------
//Navegando pelos elementos

//parentNode parentElement

const body = document.querySelector('body')
console.log(body.parentNode)

//childNodes children
console.log(body.childNodes)
console.log(body.children)

//firstChild firstElementChild
console.log(body.firstChild)
console.log(body.firstElementChild)

//lastChild lastElementChild
console.log(body.lastChild)
console.log(body.lastElementChild)

//nextSibling nextElementSibling

const el = document.querySelector('header')
console.log(el.nextSibling)
console.log(el.nextElementSibling)

//previousSibling previousElementSibling

const el1 = document.querySelector('body script')
console.log(el1.previousSibling)
console.log(el1.previousElementSibling)

//--------------------------------------------------------------------------------------------------------------
//Criando e adicionando elementos

//createElement
const div = document.createElement('div')
div.innerText = "How are you going?"

//append prepend
//body.append(div)

//insertBefore

//body.insertBefore(div, el1)
body.insertBefore(div, el.nextSibling) //Utilizando insertBefore como se fosse um insertAfter

//--------------------------------------------------------------------------------------------------------------
//Events

function print() {
    console.log('print')
}

element4.onkeyup = function() {
    console.log('run')
}

element3.addEventListener('mouseover', print)

//Argumento event

element4.onkeydown = function(event) {
    console.log(event)
}