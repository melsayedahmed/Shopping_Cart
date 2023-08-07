

let cartCount = document.querySelector('.cart-count')
let asideBar = document.querySelector('aside')
let closeIcon = document.querySelector('.fa-x');

cartCount.onclick =()=>{
    asideBar.classList.toggle('open')
}
closeIcon.onclick =()=>{
    asideBar.classList.toggle('open')
}

// array of items 
const items = [{
    id:0,
    title:"Bag 1",
    price:15,
    img:"img/main7.jpg",
    amount:1
},
{
    id:1,
    title:"Bag 2",
    price:25,
    img:"img/main8.jpg",
    amount:1
},
{
    id:2,
    title:"Bag 3",
    price:10,
    img:"img/main9.jpg",
    amount:1
},
{
    id:3,
    title:"Bag 4",
    price:30,
    img:"img/main10.jpg",
    amount:1
},
{
    id:4,
    title:"Bag 5",
    price:100,
    img:"img/main11.jpg",
    amount:1
},
{
    id:5,
    title:"Bag 6",
    price:55,
    img:"img/main12.jpg",
    amount:1
},
{
    id:6,
    title:"Bag 6",
    price:55,
    img:"img/main12.jpg",
    amount:1
},
{
    id:7,
    title:"Bag 5",
    price:100,
    img:"img/main11.jpg",
    amount:1
},{
    id:8,
    title:"Bag 1",
    price:15,
    img:"img/main7.jpg",
    amount:1
},
{
    id:9,
    title:"Bag 2",
    price:25,
    img:"img/main8.jpg",
    amount:1
},
{
    id:10,
    title:"Bag 3",
    price:10,
    img:"img/main9.jpg",
    amount:1
},
{
    id:11,
    title:"Bag 4",
    price:30,
    img:"img/main10.jpg",
    amount:1
}]

/* render items */

let parentBoxs = document.querySelector('.parent-boxs')
let currentItem = ""

function rednerItems() {
    items.forEach(item => {
        currentItem += `
        <div class="box">
        <img src="${item.img}">
        <h4 class="product">${item.title}</h4>
        <h5 class="price">${item.price}.00</h5>
        <div class="cart" data-id="${item.id}">
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>
        `
        parentBoxs.innerHTML = currentItem
    } )
}
rednerItems() 


// render cartItems
let cartItems = []
let parentCartBoxs = document.querySelector('tbody')
let currentCartItems = ""

function renderCartItems() {
    currentCartItems = ""
    cartItems.forEach(item => {
        currentCartItems += `
        <tr>
        <td>${item.id}</td>
        <td><img src="${item.img}" alt="" srcset=""></td>
        <td>${item.title}</td>
        <td>
        <span class="btn" onclick="updateCartItem('increase','${item.id}')">+</span>
        <span class="amount">${item.amount}</span>
        <span class="btn"  onclick="updateCartItem('decrease','${item.id}')">-</span>
        </td>
        <td>${item.price}.00$</td>
        <td class="all-price">${item.price * item.amount }.00$</td>
        <td> <button onclick="delteCartItem(${item.id})" > Delete </button> </td>
  </tr>
        
        ` 
    })
    parentCartBoxs.innerHTML = currentCartItems
    document.querySelector(".cart-count span").innerHTML = cartItems.length
}
renderCartItems()



// add to cart
let btnsAdd = document.querySelectorAll(".cart")
btnsAdd.forEach(btn => {
    btn.addEventListener('click', ()=> {
        let id = btn.dataset.id
        items.find(item => {
                if (item.id == id) {
                   if (cartItems.some(cartItem => cartItem.id == id)) {
                     alert('product already exist')
                   }else{
                    cartItems.push(item)
                   }
                }
        })
        renderCartItems()
    })
})
// update cart 
function updateCartItem(action,id) {
    cartItems.find(item => {
        if (item.id == id) {
            if (action == 'increase') {
                item.amount += 1
            }else{
                if (item.amount > 1) {
                    item.amount -= 1
                }else{
                    alert("Amount Must Be 1 and more than it")
                }
            }
        }
        renderCartItems()
    })
}
// delete 
function delteCartItem(id) {
    cartItems = cartItems.filter(item => item.id != id)
    renderCartItems()
}
// deleteAll 
function deleteAll() {
    cartItems = []
    renderCartItems()
}