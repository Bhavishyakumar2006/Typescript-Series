type chaiOrder = {
    type:string,
    sugar:number, 
    strong:boolean
};

function makeChai (order:chaiOrder){
    console.log(order)
}

function serveChai (order:chaiOrder){
    console.log(order)
}

// interface
type teaRecipe = {
    water:number;
    teaLeave:number
}

class masalaChai implements teaRecipe{
    water =1;
    teaLeave = 4
}

// type cupSize = 'small' | 'large' // litteral type

interface cupSize {
    size : 'small' | 'large'
}
class lemonTea implements cupSize {
    size: "small" | "large" = 'large'
}


// type response = {ok:boolean} | {ok:boolean};
interface response {
  ok: {ok:true} | {ok:false};  
} 

class myRes implements response {
    ok: { ok: true; } | { ok: false; } = {ok: false};
}

//union type
type teaTypes = 'lemon' | 'masala' | 'ginger'
function orderTea(t:teaTypes){
    console.log(t)
}

//intersection type
type baseTea = {teaLeaves:number};
type extra = {ginger:number};

type gingerChai = baseTea & extra;

const chaiCup:gingerChai = {
    teaLeaves:10,
    ginger: 2
}

// optional type
type userData = {
    username: string;
    bio?:string
}

const showUserData:userData = {
    username: 'bhavishya',
    bio: 'frontend developer' //optional
}

// readonly
type bankDetail = {
    readonly name: string;
    readonly balance:number;
    email:string
}

let candidate1:bankDetail = {
    name:'bhavishya kumar',
    balance: 1000000,
    email: "bhavishya@gmail.com"
} 
// candidate1.name = "bhavishya"  //not assignable
