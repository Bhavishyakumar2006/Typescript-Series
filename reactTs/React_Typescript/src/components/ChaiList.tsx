import type { User } from "../types"
import { ChaiCard } from "./ChaiCard"


interface ChaiListProps{
    details: User[]
}

export function ChaiList({details}:ChaiListProps) {
  return (
    <div>
        {details.map((userData) => (
            <ChaiCard 
                key={userData.course}
                name={userData.fullName}
                price={userData.price}
            />
        ))}
    </div>
  )
}

