import { createSlice } from "@reduxjs/toolkit";

const CardSlise = createSlice({
    name: 'card',
    initialState: {
        card: [],
    },
    reducers: {
        addToCard: (state, action) => {
            const axistingItem = state.card.find(
                (item) => item.CardData.id === action.payload.CardData.id
            );
            if (axistingItem) {
                state.card = state.card.map((item) => item.CardData.id === action.payload.CardData.id ? { ...item, qty: item.qty + 1 } : item);
            }
            else {

                state.card.push(action.payload)
            }
        },
        removeToCard: (state, action) => {
            state.card = state.card.filter((item) => item.CardData.id !== action.payload);
        },

        incrementQty: (state, action) => {
            state.card = state.card.map((item) => item.CardData.id === action.payload ? { ...item, qty: item.qty + 1 } : item);
        },

        decrementQty: (state, action) => {
            state.card = state.card.map((item) => item.CardData.id === action.payload ? { ...item, qty: item.qty - 1 } : item);
        },
    },
});

export const { addToCard, removeToCard, incrementQty, decrementQty } = CardSlise.actions;
export default CardSlise.reducer;