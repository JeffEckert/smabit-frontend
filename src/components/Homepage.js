import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Homepage = () => {

        return(

            <Jumbotron>
            
            <h2>Welcome to SmaBIT</h2>
            <h3>Your complete Small Business Inventory Tracker</h3>
            <p>To get started please click on the add Item Button above to create your first Item to Track.</p>
            <br/>
            <br/>
            
            <h3>Returning Users</h3>
            <p>Click on Items to see your list of tiems and Balances.</p>
            
            </Jumbotron>
        )
}

export default Homepage