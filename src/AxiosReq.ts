import axios from "axios" // importing functionality
import type { AxiosResponse } from "axios"  // importing type

interface todo {
    userId:number;
    id:number;
    title:string;
    completed:boolean
}

const AxiosRequest = async() => {
    try {
        const response:AxiosResponse<todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data)
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error :", error.message);
            if(error.response) console.log(error.response.status)
        }
    }
}