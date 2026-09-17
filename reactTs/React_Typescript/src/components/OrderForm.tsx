import React, { useState } from "react";

interface orderFormProps{
    onSubmit(order: {name:string; cups:number}):void
}

export function OrderForm({onSubmit}:orderFormProps) {
    const [name, setName] = useState<string>("");
    const [cups, setCups] = useState<number>(0);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({name, cups});
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Order form</label>
        <input 
            type="text"
            value={name}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <input 
            type="number"
            value={cups}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)}
        />
        <button type="submit">order Now</button>
    </form>
  )
}

