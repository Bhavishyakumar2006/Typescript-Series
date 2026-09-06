// Type assertion

let response:any = "20";

let numericLength:number = (response as string).length

type Book = {
    name: string;
}
let Bookstring = '{"bookname":"hello"}';
let Bookobject = JSON.parse(Bookstring) as Book
console.log(Bookobject.name);


let inputElement = document.querySelector("userInput") as HTMLInputElement;


// Unkonwn vs Any

let value:any;

value = 345
value = "string"
value = [1, 2, 3];
value.toUpperCase()


let newvalue:unknown;

newvalue = 345
newvalue = [1, 2, 3];
newvalue = "string"

if (typeof newvalue === 'string') {
    newvalue.toUpperCase()
}

// in try catch block

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log('Error', error)
}


let data:unknown = "Hello world!";
let strData:string = data as string;


// never

type role = 'admin' | 'user' | 'faculty';

function redirector (role:role): void {
    if (role === "admin") {
        console.log("Redirect to admin dashboard");
        return
    }
    if (role === 'user') {
        console.log("Redirect to user dashboard");
        return
    }
    role;
}

function neverReturn ():never {
    while(true){}
}
