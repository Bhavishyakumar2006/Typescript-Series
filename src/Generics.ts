function wrapeinArray<T> (item:T): T[] {
    return [item]
}
wrapeinArray("masala")
wrapeinArray(56)
wrapeinArray(true)


function pair <A, B> (a:A, b:B):[A, B] {
    return [a, b]
}
pair("masala",3)
pair("masala",{})
pair("masala","ginger")

//generic in interface
interface shape <T> {
    circle: T
}
const geomatery:shape<string> = {
    circle: "circle"
}
const geomatery2:shape<number> = {
    circle: 50
}


interface ApiReq <G> {
    status:number;
    data:G
}
const res:ApiReq <{data:string}> = {
    status:200,
    data: {data: "some data"}
}