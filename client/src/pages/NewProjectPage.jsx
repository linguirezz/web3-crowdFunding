import React from 'react'
import { Link } from 'react-router-dom'

function NewProjectPage() {
  return (
    <div>
        <div>NewProjectPage</div>
        <button className='nav-btn'>
            <Link to={"/"}>
            back to home
            </Link></button>
    </div>
    
)
}

export default NewProjectPage