type ActionType = {
    type: string
}
export const TOOGLE_CONSTANT = "TOOGLE-COLLAPSED"
export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOOGLE_CONSTANT:
            return !state
    }
    return state
}