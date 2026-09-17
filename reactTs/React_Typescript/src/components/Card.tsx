import type { PropsWithChildren, ReactNode } from "react"

interface cardProps extends PropsWithChildren{
    title: string;
    footer?: ReactNode
}

export function Card({title, children, footer}:cardProps) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{children}</p>
        <div>
            {footer && <footer>{footer}</footer>}
        </div>
    </div>
  )
}

