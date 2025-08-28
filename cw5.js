class Product{
    constructor(name,type,price){
        this.name = name
        this.type = type
        this.price = price
    }
    formatted(){
        console.log(`NAME:${this.name}: TYPE:${this.type}, PRICE:${this.price}`)
    }
    setPrice(value){
        this.price = value
    }
    applyDiscount(amount){
        this.price = this.price - (this.price * (amount / 100))
    }
}
class Shoes extends Product{
    constructor(name,price,size){
        super(name,"SHOES", price)
        this.size = size
    }
}
const nike = new Shoes('Nike', 10000, 33)
nike.formatted()