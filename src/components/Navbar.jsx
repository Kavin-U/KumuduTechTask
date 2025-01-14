import React from 'react'

export default function Navbar() {
  return (
    <div className='p-3 bg-slate-100'>
        <ul className='flex justify-between'>
            <li className=''>
                <h1 className=''>MagicFrames</h1>
            </li>
            <li className='w-52'>
                <a rel='noopener noreferrer'>Create a Frame</a>
            </li>
        </ul>
    </div>
  )
}
