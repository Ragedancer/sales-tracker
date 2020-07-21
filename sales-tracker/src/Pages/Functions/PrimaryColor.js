import React from 'react';

export function PrimaryColor(){
    return(
        <label>Primary Color: <br/>
            <select>
                <option class = "red" value = "red">Red</option>
                <option class = "blue" value = "blue">Blue</option>
                <option class = "green" value = "green">Green</option>
                <option class = "yellow" value = "yellow">Yellow</option>
                <option class = "orange" value = "orange">Orange</option>
                <option class = "purple" value = "purple">Purple</option>
                <option class = "pink" value = "pink">Pink</option>
            </select>
        </label>
    );
}