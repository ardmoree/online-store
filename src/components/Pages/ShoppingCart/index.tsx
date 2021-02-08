import React, {useEffect, useState} from "react"
import "./style.css"
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

type CartProps = {}

const ShoppingCart = ({}: CartProps) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("./online-store/db.json",{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then((res) => {
            setData(res.items)
            setLoading(false)
        })
    }, []);

    return (<div className={"shoppingCart"}>
        <h1 className={"header"}>SHOPPING CART</h1>
        {data.length && !loading && <ItemList items={data}/>}
        {loading && <div>Loading ...</div>}
        <NewItemForm />
    </div>)
}

export default ShoppingCart;
