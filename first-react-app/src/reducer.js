const initialState = {
    counter: 0,
    resetvalue:5
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'RESET_COUNTER') {
        return {
            ...state,
            counter: state.resetvalue
        }
    }
    return {
        ...state
    }
}

export default reducer;