import React from "react"
import './index.css'

const Shortener = () => {
    return (
        <div className="flex justify-center items-center w-1/2 m-auto border font-mono bg-purple-200">
            <h1 className="text-xl font-semibold">URL Shortener</h1>
            <div className="p-6">
                <input className="border-2 border-indigo-500/100 rounded p-2 mr-2" type="text" placeholder="Enter URL"/>
                <button className="rounded bg-slate-950 hover:bg-indigo-500/100 text-white p-2">Shorten</button>
            </div>
        </div>
    )
}

export default Shortener