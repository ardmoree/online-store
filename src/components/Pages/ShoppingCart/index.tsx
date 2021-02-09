import React, {useEffect, useState} from "react"
import "./style.css"
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import Checkout from "./Checkout";

type CartProps = {}

const ShoppingCart = ({}: CartProps) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("./db.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then((res) => {
            setData(res.items)
            setLoading(false)
        })
    }, []);

    return (<div className={"shoppingCart"}>
        <div className={"header"}>SHOPPING CART</div>
        {data.length > 0 && !loading &&
            <div className={"midSection"}>
              <ItemList items={data}/>
              <Checkout />
            </div>}
        {loading && <div>Loading ...</div>}
        <NewItemForm/>
    </div>)
}

export default ShoppingCart;
