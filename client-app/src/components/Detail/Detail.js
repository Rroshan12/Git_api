import React from 'react'

function Detail({userdetail}) {
    return (
        <div>
          
         <a href={`${userdetail.html_url}`} class="grow black "> {userdetail.name}</a>
          
       
        </div>
    )
}

export default Detail
