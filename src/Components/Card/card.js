import React,{useState} from 'react';
import Data from '../dataComponent';

function Cards(){
    const Card = Data({useState})

    return(
        <div>{Data.image}</div>
    )
    
}
    export default Cards