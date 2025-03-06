import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Protector({ element }) {
    const CardItem = useSelector((state) => state.card.card);
    return CardItem.length > 0 ? element : <Navigate to="/" /> ;
}

export default Protector;
