import {reducer, StateType, TOOGLE_CONSTANT} from "./Reducer";

test('test reducer', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOOGLE_CONSTANT})

    expect(newState.collapsed).toBe(true)
})