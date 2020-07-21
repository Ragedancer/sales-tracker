import React, {Component} from 'react';

import App from '../App/App.js';
import {ItemName} from '../Functions/ItemName';
import {ItemType} from '../Functions/ItemType';
import { render } from '@testing-library/react';
import { ItemStyle } from '../Functions/ItemStyle';
import { PrimaryColor } from '../Functions/PrimaryColor';
import {SecondaryColor} from '../Functions/SecondaryColor';
import {Price} from '../Functions/Price';
/*
    Class Name: AddItem
    Class Usage: Called to pull up a fill in menu to add items to 
                 the arraylist of items sold.
    Class Reason: Is the centerpoint of the whole application.
*/
class AddItem extends Component{


render(){

    return(
        <form>
            <ItemName/><br/>
            <ItemType/><br/>
            <ItemStyle/><br/>
            <PrimaryColor/><br/>
            <SecondaryColor/><br/>
            <Price/>
        </form>
    );
}}

export default AddItem;