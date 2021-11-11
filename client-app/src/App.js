import React,{useState,useEffect} from 'react';
import './App.css';
import Card from './components/Card'


function App() {
  const [userInfo,setUserInfo] = useState([]);



useEffect( () => {

  getUserInfo();
  
  }, []);

  const getUserInfo = async () => {
  const response = await fetch(`http://localhost:5000/getUserInfo`);
  const data = await response.json();
  console.log(data);
  setUserInfo(data);  
};
  
  return (
    <div className="App">
      {
        userInfo.map(info =>(
         
          <Card key={info.id} info={info} />
        ))
      }



    </div>
  );
}

export default App;
