function createStore(reducer) {
    let state;
    let listeners[];

    const getState = () => state;

    const subscribe = listener => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filters(1 => 1 !== listener);
        };
    };

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener =>());0
    };

    return {
        getState,
        subscribe,
        dispatch
    };

}