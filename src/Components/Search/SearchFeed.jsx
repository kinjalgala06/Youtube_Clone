import moment from 'moment';
import React, { useState,useEffect } from 'react'
import { Link } from "react-router";
import { Links } from 'react-router-dom'
import {API_KEY, value_converter} from '../../data'

import { useParams } from 'react-router';

const SearchFeed = ({category}) => {
    const [data,setData]=useState([]);
    const {searchTerm}=useParams();

    const fetchdata= async ()=>{

        // const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${searchTerm}&key=${API_KEY}`
        const videoList_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchTerm}&key=${API_KEY}`;

        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }
        useEffect(()=>{
            fetchdata(searchTerm);
        },[])
        
        return (
          <div className="feed">
              {Array.isArray(data) && data.map((item,index)=>{
                const videoId = item.id.videoId || item.id; 
                  return(
                      // <Link to={`video/${item.snippet.searchTerm}/${item.id}`} className='card'>
                      <Link key={index} to={`video/${videoId}`} className="card">
                          <img src={item.snippet.thumbnails.medium.url} alt="" />
                          <h2>{item.snippet.title}</h2>
                          <h3>{item.snippet.channelTitle}</h3>
                          {/* <p>15k views &bull; 2days ago</p> */}
                          {/* <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p> */}
                      </Link>
                  )
              })}
                      
          </div>
        )
    

}

export default SearchFeed