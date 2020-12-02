export const commonAction = () => dispatch => {
    dispatch({
        type: 'COMMON_ACTION',
        payload: 'result_of_common_action'
    })
}