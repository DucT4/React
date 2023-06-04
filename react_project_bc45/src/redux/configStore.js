import { configureStore } from '@reduxjs/toolkit'
import arrUserReducer from './arrUserReducer';
import { userRegisterReducer } from './userRegisterReducer';

export const store = configureStore({
    reducer: {
        likeReducer: (state = 10, action) => {
            if (action.type === 'increaseLike') {
                state += action.payload;
            }
            return state;
        },
        imgReducer: (state = "./img/black-car.jpg", action) => {
            switch (action.type) {
                case 'changeIMG': {
                    state = action.payload
                }; break;
            }
            return state;
        },
        fontSizeReducer: (state = 16, action) => {
            if (action.type === 'FONT') {
                state += action.payload;
            } 
            

            return state
        },
        userRegisterReducer:userRegisterReducer,
        arrUserReducer : arrUserReducer
    }
});