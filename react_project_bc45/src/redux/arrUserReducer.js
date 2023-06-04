//rxreducer
const initialState = [{ email: 'abd2T@GMAIL.COM', name: 'ABH', password: '***' },
{ email: 'abd2T@Gsfs.edu', name: 'ahj', password: '***' }]

export default (state = initialState,action ) => {
    switch (action.type) {
        case 'REGISTER_FORM': {
            const values = { ...action.payload };
            console.log('value', values);
            //clone arrState ra
            let newArrUser =[...state];
            newArrUser.push(values);
            state =newArrUser;
        }; 
        case 'DELETE':{
            let newState =[...state];
            newState= newState.filter(item=>item.email !==action.payload);
            return newState;
        }  

        default:
            return state
    }
    return state;
}
