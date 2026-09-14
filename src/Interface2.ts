interface chai {
    flavour:string;
    price:number
}
const OrderChai:chai = {flavour:"masala", price:54}

interface shop {
    name:string;
    readonly id:number
}
let s:shop = {name:"bhavishyaMall", id:27}
// s.id = 3


interface discountCalculate {
    (price:number):number
}

const Apply50:discountCalculate = (price) => price*0.5


interface carModel {
    start():void;
    stop():void
}
const fortuner:carModel = {
    start(){
        console.log("car is start");
    },
    stop(){
        console.log("stop the car");
    }
}


interface chaiRating {
    [flavour:string]:number
}
const ratings:chaiRating = {
    masala:5,
    ginger:5
}

//interface merging
interface user {
    name:string
}
interface user {
    age:number
}
const userDetail:user = {
    name:"bhavishya",
    age:20
}

//inherit or extends
interface a{
    a:string
}
interface b {
    b:string
}
interface c extends a,b {
    c:string
}
const say:c = {
    a:"say",
    b:"hello",
    c:"world"
}