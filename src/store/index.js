import { configureStore } from "@reduxjs/toolkit";

import sidebarItemsReducer from "./slices/sidebarItems";

export const store = configureStore({
    reducer: {
        sidebarItems: sidebarItemsReducer
    }
})