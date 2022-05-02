type InitStateType = {
  loading: boolean
}
type loadingActionType = {
    type: 'SET-LOADING',
    payload: boolean
}

const initState: InitStateType = {
   loading: false
}

export const loadingReducer = (state = initState, action: loadingActionType): InitStateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, loading: action.payload}
        }
        default: return state
    }
}

export const loadingAC = (payload: boolean): loadingActionType => ({
    type: 'SET-LOADING',
    payload: payload
})