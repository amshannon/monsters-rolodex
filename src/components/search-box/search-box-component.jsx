import React from 'react';

import './search-box.styles.css';

/*
Functional components don't have access to state because they don't have 
access to constructor, which is a class method on our Component that we 
import from react that we extend our Class from. They also don't have access to 
life-cycle methods. No internal state or life-cycle met hods as don't always 
need this.
Sometimes all we want to do is render some html - That's what a funcitonal component 
really is.
*/

// placeholder and handleChange destructured off the props object passed in
export const SearchBox = ({ placeholder, handleChange }) => (  
    <input 
        className='search' // so can pick up styles from stylesheet
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
)