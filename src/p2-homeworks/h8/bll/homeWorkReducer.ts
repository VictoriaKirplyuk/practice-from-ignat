import {UserType} from "../HW8";


type SortType = 'up' | 'down'
type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckACActionType = {
    type: 'check',
    payload: number
}

type homeWorkReducerActionType = SortActionType | CheckACActionType


export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {

            const sortFunc = (a: UserType, b: UserType) => {
                if (a.name < b.name) return 1
                else if (a.name > b.name) return -1
                else return 0
            }
            const sortState = state.sort(sortFunc)

            return action.payload === 'down' ? [...sortState] : [...sortState].reverse()
        }

        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}

export const sortAC = (payload: SortType): SortActionType => ({type: 'sort', payload: payload})
export const checkAC = (payload: number): CheckACActionType => ({type: 'check', payload: payload})
