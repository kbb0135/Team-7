import React, {useState} from 'react';
import Card from '../Components/Card';
import Coke from '../Assets/Coke.png';
import '../style.css';
function Menu() {
    return (
        <div className="MenuBody">
            <Card 
            title="Coke"
            price="$1.50"
            rating="5.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Sushi"
            price="$3.50"
            rating="4.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Rice"
            price="$6.50"
            rating="1.5"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Coke"
            price="$1.50"
            rating="5.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Sushi"
            price="$3.50"
            rating="4.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Rice"
            price="$6.50"
            rating="1.5"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Coke"
            price="$1.50"
            rating="5.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Sushi"
            price="$3.50"
            rating="4.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Rice"
            price="$6.50"
            rating="1.5"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Coke"
            price="$1.50"
            rating="5.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Sushi"
            price="$3.50"
            rating="4.0"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
            <Card 
            title="Rice"
            price="$6.50"
            rating="1.5"
            location="Discovery Parks Market"
            imageSrc={Coke}/>
        </div>
    )
 
}

export default Menu;