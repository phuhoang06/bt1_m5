const products = [
    {id : 1,name: "Laptop",price: 100,quantity:5},
    {id : 2,name: "TV",price: 1001,quantity:15},
    {id : 3,name: "SmartPhone",price: 100,quantity:10},
    {id : 4,name: "Table",price: 100,quantity:7},
]
products.map(product => {
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
})


const calculateTotalValue = products.reduce((acc, cur) => acc + cur.price*cur.quantity, 0);
console.log("tong gia tri hang ton kho : "+calculateTotalValue);


const minPrice = 1000;
const filterByPrice = products.filter((products)=> products.price  > minPrice);
console.log("Nhung product co gia tri lon hon minPrice : ");
console.log(filterByPrice);


const newProducts = { id: 5, name: "Book", price: 600, quantity: 7 };
const addProduct = [...products,newProducts];
console.log("Products sau khi them : ");
console.log(addProduct);

const id = 1;
const removeProductById = products.filter((products) => products.id !== id);
console.log("product sau khi xoa : ");
console.log(removeProductById);

const id_product_update_new = 2;
const newQuantity = 16;
const updateProducts = products.map(product => {return product.id===id_product_update_new?{
    ...product,quantity: newQuantity
}:product;
});
console.log("update");
console.log(updateProducts);