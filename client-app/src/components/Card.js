import React from 'react'

function Card({info}) {
    return (
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <img src={`${info.avatar_url}`} class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
            <div class ="pa2 ph3-ns pb3-ns">
            <div class ="dt w-100 mt1">
            <div class ="dtc">
            <h1 class ="f5 f4-ns mv0" >{info.login}</h1>
            </div>
            <div class ="dtc tr">
            <h2 class ="f5 mv0">Open Issue: #500</h2>
            </div>
            </div>
            <p>Repos Url</p>
            <p class ="f7 lh-copy measure mt2 mid-gray">
            {info.repos_url} 
           
            </p>
            </div>
        </article>
    )
}

export default Card
