interface ChaiCardProps {
    name:string;
    price:number;
    isSpecial?:boolean
}

export function ChaiCard({name, price, isSpecial = false}:ChaiCardProps) {
  return (
    <section>
        <h1>
            {name} {isSpecial && <span>star</span>}
        </h1>
        <p>
            {price}
        </p>
    </section>
  )
}

