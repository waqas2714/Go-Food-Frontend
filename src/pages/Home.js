import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const loadData = async ()=>{
    const response = await axios.get("http://localhost:5000/api/getFoodItems");
    setFoodItems(response.data[0]);
    setFoodCat(response.data[1]);
    console.log(foodItems);
    console.log(foodCat);
  }
  useEffect(()=>{
    loadData();
  },[])


  return (
    <div>
      <div><Navbar /></div>
      <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain"}} >  
  <div className="carousel-inner" id='carousel'>
  <div className="carousel-caption my-5" style={{zIndex:"10"}}>
  <div className="d-flex justify-content-center" >
      <input className="form-control me-2" type="search" placeholder="Search here" value={search} aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />
    </div>
      </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?fries" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?streetfood" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
      <div className="container">
        {
          foodCat !== []?
          foodCat.map((item) => {
            return(
              <div className="row mb-3">
                <div key={item._id} className="m-3 fs-3"><b>{item.CategoryName}</b></div>
                <hr />
                {
                  foodItems!==[]?
                  foodItems.filter((items)=> (items.CategoryName === item.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                  .map((filteredItems)=>{
                    return(
                      <div key={filteredItems._id} className="col-12 col-md-6 col-lg-4">
                        <Card  options={filteredItems.options[0]} foodItems={filteredItems} ></Card>
                      </div>
                    )
                  }): <div>No such data found.</div>
                }
              </div>
            ) 
          }): <div>........</div>
        }
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
