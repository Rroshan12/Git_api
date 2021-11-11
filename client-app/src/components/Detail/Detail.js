import React from 'react'

function Detail({userdetail}) {
    return (
        <div>
         
         <a href={`${userdetail.html_url}`} class=" black f7 "> {userdetail.name} </a>
         <p class="f7 black">#openIssue:<strong class="f5 darkblack" >{userdetail.open_issues_count}</strong>:#def_branch:<strong class="f5 darkblack" >{userdetail.default_branch}</strong></p>
          
       
        </div>
    )
}

export default Detail
