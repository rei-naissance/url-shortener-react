import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CopyToClipboard from "react-copy-to-clipboard"

const Result = () => {

    const [shortenLink, setShortenLink] = useState('Test String')
    const [copied, setCopied] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [copied]);

    return (
        <div>
            <p>{shortenLink}</p>

            <CopyToClipboard
                text = {shortenLink}
                onCopy = {() => setCopied(true)}>
                
                <button >Copy to Clipboard</button>    
            </CopyToClipboard>            
            
        </div>
    )
}

export default Result