import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            "name": "House Plants",
            "amount": 33
        },
        {
            "name": "Potter Plants",
            "amount": 12
        },
        {
            "name": "Seeds",
            "amount": 65
        },
        {
            "name": "Small Plants",
            "amount": 23
        },
        {
            "name": "Big Plants",
            "amount": 23
        },
        {
            "name": "Succulents",
            "amount": 17
        },
        {
            "name": "Trerrariums",
            "amount": 19
        },
        {
            "name": "Gardening",
            "amount": 13
        },
        {
            "name": "Accessories",
            "amount": 18
        },
    ]
}

export const sidebarItemsSlice = createSlice({
    name: "sidebarItems",
    initialState,
    reducers: {}
})

export const sidebarItemsSelector = (state) => state.sidebarItems;

export default sidebarItemsSlice.reducer;