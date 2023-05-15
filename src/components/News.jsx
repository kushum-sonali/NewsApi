import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function News(){
    const {id}= useParams(); 
    const [news,setNews]=useState([]);
   

    const getData=async()=>{
        const res=  await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f36a14405bce4207b2ef884c54d20606");
        console.log(res)
        const resData=await res.data.articles;
        resData.map((item,index)=>{
            item.source.id=index;
        })
        const filterData=resData.filter((item)=>item.source.id==id);
        console.log(filterData)
        setNews(filterData);
        }
useEffect(()=>{
    getData();
},[id])
    return (
        <div className="container-fluid main">
              <h1 className='text-align-center m-5 text-primary'>{news[0]?.title}</h1>
              <div className="details mt-2 mb-2">
               <h3 className="colour"> Author:-
                <span>{news[0]?.author}</span>
               </h3>
                <h3 className="colour">Published at :-
                <span>{news[0]?.publishedAt}</span>
                </h3>

                </div>
              
            <div className=' show'><img src={news[0]?.urlToImage} className="card-img-top img-fluid" alt={news[0]?.title} /></div>
             <div className="main">
               
                <h3 className="colour">Description:-</h3>
                <h5>{news[0]?.description}</h5>
                <h3 className="colour">Content:-</h3>
                <h5>{news[0]?.content}</h5>
                <h3 className="colour">Source:-</h3>
                <h5>{news[0]?.source.name}</h5>
                <h3 className="colour"> For More Details </h3>
               
                <button className="showurl"><a href={news[0]?.url} target="_blank" rel="noreferrer" className="showurl">Click Here</a></button>

                </div> 
              
             <style jsx>{`
             h5{
                color: blue;
             }
             span{
                    color: red;
                    font-weight: bold;
             }
             .showurl{
                    text-decoration: none;
                    color: black;
                    background-color: lightblue;
                    border-radius: 10px;
                    boder:none;
             }
            .main{
               display: flex;
               align-items: center;
               justify-content: center;
               flex-direction: column;
            }
            .colour{
                color: black
                text-align: center;
                font-weight: bold;
            }
            .show{
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.75);
                margin: 10px;
                margin-top: 20px;
                width:60vw;
            }
            .card-img-top{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                height:500px;
                border-radius: 10px;
                align-self: center;
            }
            .show:hover{
                transform: scale(1.01);
            }
            .details{
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                width: 100%;
            }


            `}</style>
        </div>
        
        
    )
   
}
export default News