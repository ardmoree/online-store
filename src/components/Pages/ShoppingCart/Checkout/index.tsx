import React from "react"
import "./style.css"

type ItemProps = {
    element?: string
}

// type item = {
//     id: number,
//     name: string,
//     price: number,
//     quantity: number
// }

const Checkout = ({element}: ItemProps) => {
    return <div className={"checkout"}>123</div>
}

export default Checkout
