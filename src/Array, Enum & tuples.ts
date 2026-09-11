// Arrays
let names:string[] = ['bhavishya', 'ujjawal', 'satyam'];
let  marks:number[] = [100, 100 , 100];
const rating:Array<number> = [5.0 , 4.5, 4.5];

type userData = {
    name:string;
    course:string;
    ERP:number
}

const users:userData[] = [{name:'bhavishya', course:'BCA', ERP:242027}];


const cities: readonly string[] = ['delhi', 'pune', 'banglore'];
// cities.push("jaipur");

// 2D array
const tables:number[][] = [
    [2, 4, 7],
    [1, 8, 4.5]
]


// Tuples
let userTuples: [string, number];
userTuples = ['ironman', 34];
// userTuples = [34, 'ironman']; 

let userInfo:[string, number, boolean?];
userInfo = ['delhi', 366];
userInfo = ["jaipur", 757, true];

//readonly tuples
const phoneBrands: readonly [string, string] = ['Iphone', 'Samsung'];


// named Tuples
const chai:[name:string, price:number] = ['masala chai', 20];


// enum
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}
let oneCupChai = cupSize.SMALL;


enum response {
    PENDING = 100,
    RESOLVED, //101  -BY DEFAULT 
    ERROR //102     -BY DEFAULT 
}

function resCheck (res:response) {
    console.log(res) // default number
}
resCheck(response.RESOLVED);



enum chaiType {
    MASALA = 'massala',
    LEMON = 'lemon'
}
function makeChai (type:chaiType) {
    console.log(`making ${type} chai`);
}
makeChai(chaiType.LEMON);


enum randonEnums {
    ID = 1,         // for standard practices emun should be homoginous.
    NAME = "enum"
}

const enum sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
console.log(sugar.LOW)


let chai2: [string, string] = ['masala', 'ginger'];
chai2.push('lemon');
