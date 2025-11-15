import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";

function DynamicMessage() {
    const messages = ["Welcome to Tasty Bites", "Enjoy your meal", "Hope you've had a good time", "Visit us again", "Don't forget to leave a review"];
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);
    

    return() => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar/>
        <div style={styles.board}>
            <h1>Message Board</h1>
            <p style={styles.message}>{messages[currentMessageIndex]}</p>
        </div>
        </div>
    )
}

const styles = {

    board: {
  
      padding: '20px',
  
      border: '2px solid #555',
  
      borderRadius: '10px',
  
      width: '400px',
  
      margin: '40px auto',
  
      textAlign: 'center',
  
      backgroundColor: '#f4f4f4',
  
    },
  
    message: {
  
      fontSize: '18px',
  
      fontWeight: 'bold',
  
      color: '#333',
  
    },
  
  };

export default DynamicMessage;