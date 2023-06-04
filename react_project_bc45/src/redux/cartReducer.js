// const initialState = {
//     gioHang: [
//         { id: '1', name: 'nike air 1', price: 1000, quantity: 1, image: "https://shop.cyberlearn.vn/images/adidas-prophere.png" }
//     ]
// }

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case 'ITEM': {
//             let newState = { ...state };
//             const item = { ...action.payload, quantity: 1 };
//             //clone state ra biến riêng
//             let gioHangState = [...newState.gioHang];
//             let index = gioHangState.findIndex(sp => sp.id === item.id);
//             if (index !== -1) {
//                 let spGioHang = { ...gioHangState[index] };
//                 spGioHang.quantity += 1;
//                 gioHangState[index] = spGioHang;
//             } else {
//                 gioHangState.push(item)
//             }
//             //update state
//             newState.gioHang = gioHangState;
//             return newState;
//         };

//         default:
//             return state
//     }
// }




//rxslice



import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    gioHang: [
        { id: '1', name: 'nike air 1', price: 1000, quantity: 1, image: "https://shop.cyberlearn.vn/images/adidas-prophere.png" }
    ]

}

const cartReducer = createSlice({
    name: 'cartReducer',//name của slice dùng để tạo ra action.type
    initialState,
    reducers: {
        addItemAction: (state, action) => {
            //dispatch đúng type sẽ nhảy vào hàm này
            let item = { ...action.payload, quantity: 1 };
            let itemCart = state.gioHang.find(sp => sp.id === item.id);
            if (itemCart) {
                // let newItem = { ...state.gioHang[index] };
                itemCart.quantity += 1;
                // state.gioHang[index] = newItem
            } else {
                state.gioHang.push(item);
            }
        },
        delItemAction: (state, action) => {
            console.log(action)
            let delItem = state.gioHang.findIndex(item => item.id === action.payload)
            if (delItem !== -1) {
                state.gioHang.splice(delItem, 1)
            }
        },
        changeQuantity: (state, action) => {
            console.log(action)
            let item = state.gioHang.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
                if (item.quantity < 1) {
                    if (window.confirm('Bạn có muốn xóa không')) {
                        state.gioHang=  state.gioHang.filter(item => item.id === action.payload.id);
                    } else {
                        item.quantity -= action.payload.quantity;
                    }
                }
            }
        }
    }
});

export const { addItemAction, delItemAction, changeQuantity } = cartReducer.actions

export default cartReducer.reducer
/*
adaddItemAction(payload);
function addItemAction  (payload){
    return {
        type:'cartReducer/addItemAction',
        payload
    }
}
*/

