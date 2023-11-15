// Dynamic Styling
// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

// The class should be applied when the <button> is clicked for the first time.

// Here's how the finished app should look like BEFORE the button was clicked:



// Here's how it should look like AFTER the button was clicked:





// Important: Use React.useState() instead of just useState() as the latter can cause problems in this Udemy code environment.

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function handleClick() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p className={highlighted ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}