import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';


const Card = (props) => {
    let priceOptions = Object.keys(props.options);
    let foodItem=props.foodItems;
    const priceRef = useRef();
    let data = useCart();
    const [qty,setQty] = useState(1);
    const [size,setSize] = useState("");
    const dispatch = useDispatchCart();
    const handleAddToCart = async ()=>{
        let food=[];
        for(const item of data){
          if (item.id === foodItem._id) {
            food=item;
            break;
          }
        }
        if (food != []) {
          if (food.size === size) {
            await dispatch({type:"UPDATE",id:foodItem._id, price: finalPrice, qty})
            return
          }
          else if (food.size !== size) {
            await dispatch({type:"ADD",id:foodItem._id,name: foodItem.name, price: finalPrice, qty, size})
            return
          }
          return
        }
        await dispatch({type:"ADD",id:foodItem._id,name: foodItem.name, price: finalPrice, qty, size})
        console.log(data);
    }
    let finalPrice = qty * parseInt(props.options[size]);
    useEffect(()=>{
      setSize(priceRef.current.value);
    },[])
  return (
        <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
          <img src={foodItem.img} className="card-img-top" alt="..." style={{height:"130px",objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{foodItem.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                {
                  Array.from(Array(6),(e,i)=>{
                    return(
                      <option value={i+1} key={i+1} >{i+1}</option>
                    )
                  })
                }
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOptions.map((data)=>{
                  return(
                  <option value={data} key={data}>{data}</option>
                  )
                })}
              </select>
              <br />
              <div className="d-inline h-100 fs-5">
                Total Price = {finalPrice}/-
              </div>
            </div>
            <hr />
            <button className="btn btn-success text-dark justify-center ms-2" onClick={handleAddToCart}><b>Add to Cart</b></button>
          </div>
        </div>
  )
}

export default Card