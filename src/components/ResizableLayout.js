import React from 'react'
import Split from "react-split";
import Content from "./Content";

const ResizableLayout = () => {
    return <Split direction="vertical" style={{height: "200vh"}}>
        <Split className="flex">
            <div className="flex justify-center items-center overflow-hidden bg-gray-300">
                <Content/>
            </div>
            <div className="flex justify-center items-center overflow-hidden bg-gray-300">
                <Content/>
            </div>
        </Split>
        <div className="flex justify-center items-center overflow-hidden bg-gray-400">
            <Content/>
        </div>
    </Split>;
}

export default ResizableLayout