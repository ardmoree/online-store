import React from "react"
import "./style.css"
import Item from "./Item";

type ItemListProps = {
    items: Array<item>
}

type item = {
    id: number,
    name: string,
    price: number,
    quantity: number
    pic: string
}

const ItemList = ({items}: ItemListProps) => {
    return (<div className={"itemList"}>
        {items.map((item) => (<Item key={item.id} element={item}/>))}
    </div>)
}

export default ItemList;
