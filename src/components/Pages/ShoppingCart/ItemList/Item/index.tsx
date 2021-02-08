import React from "react"
import "./style.css"

type ItemProps = {
    element: item
}

type item = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

const Item = ({element}: ItemProps) => {
    return <div className={"item"}>{element.name}</div>
}

export default Item
