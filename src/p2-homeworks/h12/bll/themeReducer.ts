type ActionType = {
    type: "CHANGE-THEME",
    colorTheme: string
}

const initState = {
    setTheme: 'some'
};

export const themeReducer = (state = initState, action: ActionType): typeof initState => {
    switch (action.type) {
        case "CHANGE-THEME": {
            if(action.colorTheme === 'dark') {
                return {...state, setTheme: action.colorTheme}
            } else if(action.colorTheme === 'red') {
                return {...state, setTheme: action.colorTheme}
            } else if(action.colorTheme === 'some')  {
                return {...state, setTheme: action.colorTheme}
            } else {
                return state
            }
        }
        default: return state;
    }
};

export const changeThemeC = (color: string): ActionType => ({
    type: "CHANGE-THEME",
    colorTheme: color
});
