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
    return <div className={"checkout"}>
        <div className={"checkoutTotal"}>Total: $228</div>
        <button className={"checkoutButton"}>CHECKOUT</button>
    </div>
}

export default Checkout
