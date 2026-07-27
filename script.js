const products=[

{
name:"Laptop",
price:65000,
image:"https://picsum.photos/300?1"
},

{
name:"Headphones",
price:2000,
image:"https://picsum.photos/300?2"
},

{
name:"Smart Watch",
price:5000,
image:"https://picsum.photos/300?3"
},

{
name:"Phone",
price:30000,
image:"https://picsum.photos/300?4"
},

{
name:"Camera",
price:40000,
image:"https://picsum.photos/300?5"
},

{
name:"Keyboard",
price:1200,
image:"https://picsum.photos/300?6"
}

];

const productContainer=document.getElementById("products");

const search=document.getElementById("search");

let cart=0;

function display(data){

productContainer.innerHTML="";

data.forEach(item=>{

productContainer.innerHTML+=`

<div class="card">

<img loading="lazy" src="${item.image}">

<h3>${item.name}</h3>

<h4>₹${item.price}</h4>

<button onclick="addCart()">Add to Cart</button>

</div>

`;

});

}

display(products);

function addCart(){

cart++;

document.getElementById("count").innerText=cart;

}

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filter=products.filter(p=>

p.name.toLowerCase().includes(value)

);

display(filter);

});