import React from 'react'

function Pagination() {
    return (
        <>
            <div class="tc mw8 center">
                <div class="dib overflow-hidden ba br2 b--light-silver">
                    <nav class="cf" data-name="pagination-numbers-bordered">
                        <a class="fl dib link dim black f6 f5-ns b pa3 br b--light-silver" href="#" title="Previous">&larr; Previous</a>
                        <a class="fr dib link dim black f6 f5-ns b pa3" href="#" title="Next">Next &rarr;</a>

                        <div class="overflow-hidden center dt tc">
                            <a class="dtc link dim white bg-blue f6 f5-ns b pa3 br b--light-silver" href="#" title="1">1</a>
                            <a class="dtc link dim black         f6 f5-ns b pa3 br b--light-silver" href="#" title="2">2</a>
                            <a class="dtc link dim black         f6 f5-ns b pa3 br b--light-silver" href="#" title="3">3</a>
                            <a class="dtc link dim black         f6 f5-ns b pa3 br b--light-silver" href="#" title="4">4</a>
                            <a class="dtc link dim black         f6 f5-ns b pa3 br b--light-silver" href="#" title="5">5</a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Pagination
