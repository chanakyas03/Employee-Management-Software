

import React from 'react'



function Header({ setIsAdding }) {
    return (
        <header>
          
        
            <div  style={{ marginTop: '30px', marginBottom: '18px' }}>
            <h1 align="center">Employee Management Software</h1>
            <img  align="center" width="1150px" height="500px" alt=" img" src='employee2.jpg' />
            
            </div>
            <button type='primary' onClick={() => setIsAdding(true)}>Add Button</button>
        </header>
            
         
    )
}

export default Header