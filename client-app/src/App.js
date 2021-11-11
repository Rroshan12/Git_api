import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card'


function App() {
  const [search,setSearch] = useState('');
  const [userInfo, setUserInfo] = useState([]);




  useEffect(() => {

    getUserInfo();

  }, []);

  const getUserInfo = async () => {
    const response = await fetch(`http://localhost:5000/getUserInfo`);
    const data = await response.json();
    console.log(data);
    setUserInfo(data);
  };


const updateSearch = e => {
  setSearch(e.target.value); 
};





  return (
    <>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column',
            
        }}>
            <p className='f2 white'>
                {'Surf the Github Repo, It will use Github api to surf people Repo!!!'}
            </p>
            <div style={{
            display: 'flex'
        }} className=" form center shadow-5 br3 pa3">
                  
        <input className='f4 pa2  w-100 ' type="text "  onChange={updateSearch} placeholder="search name"/>
       


            </div>

        </div>


      <div class="App">
        {
          userInfo.filter((val)=>{
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

            <Card key={info.id} info={info} />
          ))
        }
        



      </div>
    </>
  )
}

export default App