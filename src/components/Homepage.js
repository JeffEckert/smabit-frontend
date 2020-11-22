import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Homepage = () => {

        return(

            <Jumbotron>
            
            <h2>Welcome to SmaBIT</h2>
            <h3>Your complete Small Business Inventory Tracker</h3>
            <p>To get started please click on the button below to Create your first Item to track.</p>
            <Button variant="success">Create Item</Button>

            </Jumbotron>
        )
}

export default Homepage