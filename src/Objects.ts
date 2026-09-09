const chai = {
    name:'masala chai',
    price: 20,
    isHot:true
}

let tea: {
    name: string;
    teaLeaves: number;
    isHot:boolean
}

tea = {
    name:'ginger chai',
    teaLeaves:5,
    isHot:true
}

type Tea = {
    name:string;
    quantity:number;
    ingreadients: string[]
}

const gingerTea:Tea = {
    name:'ginger tea',
    quantity: 1,
    ingreadients: ['ginger', 'teaLeaves', 'water']
}

type cup = {size:string}
let smallCup:cup = {size:'250ml'};
let bigCup = {size:"300ml", material:"steel"};
smallCup = bigCup


type user = {
    username:string;
    password:number
}

let user1:user = {
    username:'bhavishya',
    password:123,
}

// type spliting
type item = {name:string; quantity:number};
type address = {localArea:string; pin:number};

type order = {
    id:string;
    item: item[];
    address: address
}

const order1:order ={
    id:"2647",
    item:[{name:"fan", quantity:1}],
    address: {localArea:"lajpat nagar", pin:647628}
}

// partial type
type chai = {
    name:string;
    price:number;
    isHot: Boolean
}
const makeChai:Partial<chai> = {  // problem, can pass empty value also
    name:"lemon chai",
    isHot:true
}

// required type -: all properties have to provide
type chaiOrder = {
    name?:string;
    quantity?:number
}
const placeOrder = (order:Required<chaiOrder>) => {
    console.log(order);
}
placeOrder({name:"ginger chai", quantity:1});

//pick type
type anotherChai = {
    name:string;
    price:number;
    isHot: Boolean;
    ingreadients:string[]
}

const anotherChaiOrder:Pick<anotherChai, 'name' | 'ingreadients'> = {
    name:'mix chai',
    ingreadients:['milk', "water"]
} 

//omit type
type newChai = {
    name:string;
    price:number;
    isHot: Boolean;
    secretIngreadients:string
}
let chaiInPublic = (orderChai:Omit<newChai, "secretIngreadients">) => {
    console.log(orderChai);
}
chaiInPublic({
    name:'special chai',
    price: 30,
    isHot:true
})