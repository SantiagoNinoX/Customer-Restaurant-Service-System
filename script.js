console.log(products)

const showMenu = () => {
    console.log("CODE: NAME - PRICE")
    for(let product of products){
        console.log(`${product.code}: ${product.name} - $${product.price}`)
    }
}

showMenu()