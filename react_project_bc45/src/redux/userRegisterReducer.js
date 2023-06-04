





const initialState = { email: '', name: '', password: '' }

export const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE_FORM': {
            const { id, value } = action.payload;
            let newState = { ...state };
            //immutable: bất biến
            newState[id] = value;
            //update state
            state = newState;
        }; break;
    }
    return state;
}
