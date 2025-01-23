const user={
    name: "Roberto",
    age: 30,
    debt: 0
}

let order = []
let orderCost = 0

const showMenu = () => {
    console.log("CODE: NAME - PRICE")
    for(let product of products){
        console.log(`${product.code}: ${product.name} - $${product.price}`)
    }
}

const askProduct = cod => {
    if (!cod) return "Enter a valid code"
    const search = products.find(product => product.code === cod)
    if(!search) return "Product does not exist"
    order.push(search)
    console.log("Your product has been added to your order. Your order is: ")
    return seeOrder()
}

const seeOrder = () => order

const calculateCost = () => {
    let cost = 0
    for (product of order){
        cost += product.price
    }
    orderCost = cost
    return orderCost
}

const endOrder = () => {
    calculateCost()
    user.debt = orderCost
    order = []
    orderCost = 0
    return `${user.name} you have to pay $${user.debt} dollars`
}

const payDebt = givenMoney => {
    if (givenMoney < user.debt){
        return "No funds"
    } 
    else if (givenMoney === user.debt){
        return "Order paid"
        user.debt = 0
    }
    else{
        return `Order paid and your change is ${givenMoney - user.debt}`
        user.debt = 0
    }
}