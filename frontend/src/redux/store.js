import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./user.Slice.js"
export const store=configureStore({    reducer:{
        user:userSlice
    }

})
