import React,{useState} from 'react'


function Pagination({currentPage,setCurrentPage}) {
    const[active,setActive] = useState(false);

    const handelClick= (data) => {
        console.log(data);
        setCurrentPage(data);
        setActive(true);
      };
    return (
        <>
            <div class="tc mw8 center">
                <div class="dib overflow-hidden ba br2 b--light-silver">
                    <nav class="cf" data-name="pagination-numbers-bordered">
                        <a class="fl dib link dim black f6 f5-ns b pa3 br b--light-silver" href="#" title="Previous" onClick={()=>setCurrentPage(currentPage-1)}>&larr; Previous</a>
                        <a class="fr dib link dim black f6 f5-ns b pa3" href="#" title="Next" onClick={()=>setCurrentPage(currentPage+1)}>Next &rarr;</a>

                        <div class="overflow-hidden center dt tc">
                            <a class={!active? 'dtc link dim white   f6 f5-ns b pa3 br b--light-silver':"dtc link dim white bg-blue  f6 f5-ns b pa3 br b--light-silver"} href="#" title="1" onClick={()=>handelClick(1)}>1</a>
                            <a class={!active? '':"dtc link dim black   bg-blue      f6 f5-ns b pa3 br b--light-silver" }href="#" title="2" onClick={()=>handelClick(2)}>2</a>
                            <a  class={!active? '':"dtc link dim black  bg-blue        f6 f5-ns b pa3 br b--light-silver"} href="#" title="3" onClick={()=>handelClick(3)}>3</a>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Pagination
