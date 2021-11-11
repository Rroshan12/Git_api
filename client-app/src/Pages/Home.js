import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card'
import Pagination from '../components/Pagination/Pagination';
import './style.css'



function Home() {
  const [search,setSearch] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const[userInfoInPages,setUserInfoInPages] = useState(10);
  const[changeWord, setChangeWord] = useState('');




  useEffect(() => {

    getUserInfo();

  }, []);

  const getUserInfo = async () => {
    const response = await fetch(`http://localhost:5000/getUserInfo`);
    const data = await response.json();
    setUserInfo(data);
  };


const updateSearch = e => {
  setSearch(e.target.value); 
};



const indexOfLastUserInfo =  currentPage * userInfoInPages;
const indexOfFirstUserInfo = indexOfLastUserInfo-userInfoInPages;
const currentUserInfo = userInfo.slice(indexOfFirstUserInfo,indexOfLastUserInfo);






  return (
    <div id="container">

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column'
            
            
        }}>
            <p className='f2 yellow'>
                {'Surf the Github Repo, It will use Github api to surf people Repo!!!'}
            </p>
            <div  className=" form center shadow-5 br3 pa3 mv2 ">
           
                  
        <input className='f4  w-100 ' type="text "  onChange={updateSearch} placeholder="search name"/>
       


            </div>
          

        </div>


      <div class="Home">
        {
          currentUserInfo.filter((val)=>{
            if(search==" ")
            {
              return val;
                        }
            else if(val.login.toLowerCase().includes(search.toLocaleLowerCase()))
            {
              return val.login.toLowerCase().includes(search.toLocaleLowerCase());
            }
            else{
              return null;
            }
          }).map(info =>(
            <>

            <Card key={info.id} info={info} />
            
            </>

          ))
        }
       
      </div>
      <Pagination   currentPage={currentPage} setCurrentPage={setCurrentPage}/>


      
     
     
    </div>

  )
}

export default Home