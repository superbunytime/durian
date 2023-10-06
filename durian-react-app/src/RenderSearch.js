import React from "react";
import JOOBLE_data from './JOOBLE.json'
import USA_JOBS_data from './USA_JOBS.json'

function RenderSearch(){


    const j_parse = JSON.stringify(JOOBLE_data)
    const u_parse = JSON.stringify(USA_JOBS_data)
    console.log(j_parse)
    console.log(u_parse)

    return(
        <div>
            Check console for job searches.
        </div>
    )
}

export default RenderSearch;