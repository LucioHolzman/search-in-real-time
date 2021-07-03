import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full h-12 pr-16 pl-16 flex items-center justify-between bg-gray-800">
            <p className="text-indigo-500  text-sm">Developed by <span className="font-light text-indigo-400">Lucio Holzman</span></p>
            <div className="flex space-x-4">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucio-holzman/"><img className="w-6" src="linkedin.png" alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/LucioHolzman"><img className="w-6" src="github.png" alt="" /></a>
            </div>
        </footer>
    )
}
