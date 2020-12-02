export default (state = {}, action) => {
    switch (action.type) {
        case 'COMMON_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}