import React from "react"
import "./style.css"

type NewItemProps = {}

const NewItemForm = ({}: NewItemProps) => {
    return (<form className={"newItemForm"}>
        <div className={"field"}><input type={"file"}/></div>
        <div className={"field"}>Quantity</div>
        <div className={"field"}>Price</div>
        <button >Add new product</button>
    </form>)
}

export default NewItemForm;
