
import { configureStore } from "@reduxjs/toolkit"
import CardSlise from "./CardSlice"
import CatogarySlice from "./CatogarySlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
    reducer: {
        card: CardSlise,
        catogary: CatogarySlice,
        search: SearchSlice,
    },

});
export default Store;