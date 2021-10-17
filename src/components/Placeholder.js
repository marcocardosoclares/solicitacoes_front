import React from 'react'

const Placeholder = ({col,bgcolor,width,height}) => {
    return (
      <div className="animeLeft">
        <p className="placeholder-wave">
          <span className={`placeholder w-${width || "100"} col-${col || "12"} bg-${bgcolor || "primary"} bg-opacity-50`}
          style={{"height":`${height}vh`}}
          ></span>
        </p>
      </div>
    )
}

export default Placeholder
