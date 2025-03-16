import React from 'react'
import flag from '../assets/flag-us-svgrepo-com.svg'
const Header = () => {
    return (
        <>
            <div className="topbar">
                <img src={flag} height={20} alt="US" /> An official website of the United States government. <a href="">Here's how you know</a>

                
            </div>
            <header>    
                <div className="container">
                    <img height={85} src="https://www.identitytheft.gov/assets/img/IDT-Logo.png" alt="" />
                    
                </div>
            </header>
        </>
    )
}

export default Header