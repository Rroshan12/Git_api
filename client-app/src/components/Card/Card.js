import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Detail from '../Detail/Detail';
import './style.css'


function Card({info}) {
    const[detail,setDetail] = useState([]);

    const handelClick = async (ata) => {
      
        const response =  await    fetch('http://localhost:5000/getDetail', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: `${ata}`
              
           
            })
          });
          const data = await response.json();

          setDetail(data);
          
         



         
      };
    
    return (
        <>
       
        
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center " id="scrolli">
            <img src={`${info.avatar_url}`} class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
            <div class ="pa2 ph3-ns pb3-ns">
            <div class ="dt w-100 mt1">
            <div class ="dtc">
            <a href={info.html_url}><h1 class ="f5 f4-ns mv0 grow dim" >{info.login}</h1></a>
            
            </div>
           
            <div class ="dtc tr">
             
           
            <button class="f6 link dim ph3 pv2 mb2 dib white bg-purple"  onClick={()=>handelClick(`${info.login}`)}>View</button>
  
            
            </div>
        
            </div>
            <p>Repos Url</p>
         <a href={info.html_url}><p class ="f7 lh-copy measure mt2 mid-gray grow dark">
            {info.repos_url} 
           
            </p></a>
            {detail.map(userdetail =>(
                
                 <Detail key={userdetail.id} userdetail={userdetail} />


            ))

            }

           
            
         
          
            </div>
        </article>

       
        </>
    )
}

export default Card
