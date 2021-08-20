console.log("console connected!");
let carts  = document.querySelectorAll('.add-cart');

let products = [{
    name:'Redmi 9 power',
    tag:'Redmi 9 power',
    price:15000,
    dprice:15000 - (15000*(5/100)),
    incart:0
},
{
    name:'POCO M3',
    tag:'POCO M3',
    price:10,
    dprice:30000 - (30000*(5/100)),
    incart:0
},
{
    name:'Infinix Smart 5A',
    tag:'Infinix Smart 5A',
    price:11000,
    dprice:11000 - (11000*(5/100)),
    incart:0
},
{
    name:'Moto G40',
    tag:'Moto G40',
    price:14500,
    dprice:14500 - (14500*(5/100)),
    incart:0
}]

for(let i=0; i < carts.length ; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumber');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
} 

function cartNumbers(product) {

    console.log("Selected itedm is",product)
    let productNumbers = localStorage.getItem('cartNumber');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumber',productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumber',1);
        document.querySelector('.cart span').textContent = 1 ;
    }
    setItems(product);
}

function setItems(product) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].incart += 1;

    }else{
        product.incart = 1;
        cartItems={
            [product.tag]:product
        }
    }


    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}

function totalCost(product) {
    
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + product.dprice)
    }else{
        localStorage.setItem('totalCost',product.dprice)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    let no =0;

    console.log(cartItems);
    if( cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            no +=1; 
            productContainer.innerHTML += `

            <div class="sno">${no}
            </div>
            <div class="product"> 
                <img src="./images/${item.tag}.jpeg"></img>
                <span>${item.name}</span>          
            </div>

            <div class="price">${item.price}</div>
            

            <div class="dprice">${item.dprice}</div>
            <div class="quantity">
               
                <span>${item.incart}</span>
                
            </div>
            <div class="total">
                $${item.incart * item.dprice},00
            </div>
            `;
            
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class-"basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal :">
                 $ ${cartCost},00
            </h4>
        `
    }
}

onLoadCartNumbers();
displayCart();