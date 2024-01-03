import React from 'react'
import  style  from "./module.module.scss";
export default function Module(props :any) {
  return (

    <div className="module">
        <div className="module_body">
        {props.children}
        </div>
    </div>
  )
}
