let openshopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openshopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeshopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id:1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: 120000
    },
    {
        id:2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 110000
    },
    {
        id:3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id:4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 320000
    },
    {
        id:5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 100000
    },
    {
        id:6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    },
];
let listcards = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML =
        <img src="image/${value.image}"/>
        // <div class="title">${value.name}</div>
        // <div
    })
}