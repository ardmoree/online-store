import React, {useEffect, useState} from "react"
import "./style.css"
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

type CartProps = {}

const ShoppingCart = ({}: CartProps) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/items").then(res => res.json()).then((res) => {
            setData(res)
        })
    }, []);

    return (<div className={"shoppingCart"}>
        <h1 className={"header"}>SHOPPING CART</h1>
        <ItemList items={data}/>
        <NewItemForm />
    </div>)
}

export default ShoppingCart;
