import React, { useState } from 'react';
import './App.css';
function App() {
const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);
// Function to handle message submission
const handleSubmit = (e) => {

Ex.No: 1 Build a Basic React APP that display custom message
Date: from users

3

e.preventDefault();
if (message.trim()) {
setMessages([...messages, message]);
setMessage(''); // Clear the input field
}
};
return (
<div className="App">
<h1>Message Display App</h1>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter your message"
value={message}
onChange={(e) => setMessage(e.target.value)}
/>
<button type="submit">Submit</button>
</form>
<div>
<h2>Messages</h2>
<ul>
{messages.map((msg, index) => (
<li key={index}>{msg}</li>
))}
</ul>
</div>
</div>
);
}
export default App;