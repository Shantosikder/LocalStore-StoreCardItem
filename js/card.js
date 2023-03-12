const addProduct = () =>{
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product,quantity);
    saveProductStorage(product,quantity);
}

const displayProduct = (product,quantity) =>{
    const containerDiv = document.getElementById('product-container');
    const div = document.createElement('li');
    div.innerText = `${product} ${quantity}`
    containerDiv.appendChild(div);
}

const getStoreCard = () =>{
    const storeCard = localStorage.getItem('cart');
    let cart = {};
    if(storeCard){
        cart = JSON.parse(storeCard);
    }
    return cart;
}

const saveProductStorage = (product,quantity) =>{
    const cart = getStoreCard();
    cart[product] = quantity;
    const cartStringfy = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfy);
    // console.log(cartStringfy);
}

const displayProductLocalStorage = () =>{
    const saveCart = getStoreCard();
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product,quantity);
        displayProduct(product, quantity);
    }
    console.log(saveCart);
}


displayProductLocalStorage();
addProduct();