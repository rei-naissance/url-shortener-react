import React from "react"
import Result from './Result.jsx'
import './index.css'

const Shortener = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center w-1/2 m-auto border font-mono bg-purple-200">
                <h1 className="text-xl font-semibold p-4">URL Shortener</h1>
                <div className="p-6">
                    <input className="border-2 border-indigo-500/100 rounded p-2 mr-2" type="text" placeholder="Enter URL"/>
                    <button className="rounded bg-slate-950 hover:bg-indigo-500/100 text-white p-2">Shorten</button>
                </div>
                <Result />
            </div>
        </div>
    )
}

export default Shortener