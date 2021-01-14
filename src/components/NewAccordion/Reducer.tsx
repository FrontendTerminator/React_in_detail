type ActionType = {
    type: string
}
export const TOOGLE_CONSTANT = "TOOGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOOGLE_CONSTANT:
            return {
                ...state,
                collapsed: !state.collapsed
            }
    }
    return state
}