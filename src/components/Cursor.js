import React from "react"
import AnimatedCursor from "react-animated-cursor"

function Cursor() {
    return(
        <div>
            <AnimatedCursor 
                innerSize={12}
                outerSize={12}
                color='250, 124, 145'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={6}
            />
        </div>
    )
}

export default Cursor;