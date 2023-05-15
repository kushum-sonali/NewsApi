import React, { useEffect } from "react"
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
function Home(){
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState([false]);
    const getdata = async()=>{
        setLoading(true);
        setData([]);
  const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f36a14405bce4207b2ef884c54d20606");
  const resdata= res.data;
  console.log(resdata);
  // push id to array
   res.data.articles.map((item,index)=>{
    item.source.id = index;
  })
  setData(resdata.articles);
  setLoading(false);
  
    }
    useEffect(()=>{
        getdata();
    },[])
    return(
      
        <div className="container-fluid d-flex main ">
          
            {loading?(
            <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden text-center"><h1>Loading...</h1></span>
          </div>)
          :(
            <>
            {data.map((item,index) => (
               <Link to={`/news/${item.source.id}`} className="link"> <div className="card" key={index}>
              <img src={item.urlToImage} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h3 className="colour"><b>{item.author}</b></h3>
                <h5 className="card-title item">{item.title}</h5>
                <p>👁{item.publishedAt}</p>
              </div>
                </div></Link>
            ))}
            </>
          )
        }
        <style jsx>{`
        .item{
         
          color:blue;
          border-radius: 10px;
        }
        .colour{
          color: black;
        }

.main{ 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  

}
.card{
  display: flex;
height:400px;
    width: 18rem;
    margin: 10px;
    padding: 10px;
  
    
}
.card-img-top{
  height: max-content;

}
.link{
  text-decoration: none;
  color: black;
}
`}</style>
        </div>
        
    )
}
export default Home;
