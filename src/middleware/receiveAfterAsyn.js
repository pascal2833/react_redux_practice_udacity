const receiveAfterAsyn = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('return value: ', returnValue) // return object action, after action creator.
    console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue // So we return actions objects, to be used in dispatch() after.
}

export default receiveAfterAsyn