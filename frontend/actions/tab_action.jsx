import * as TabAPIUtil from '../util/tab_api_util';

export const RECEIVE_TAB = 'RECEIVE_TAB';
export const RECIEVE_TAB_ERROR = 'RECIEVE_TAB_ERROR';

const receiveTab = (tab) => {
    return {
        type: RECEIVE_TAB, 
        tab
    }
}

const recieveTabError = (error) => {
    return {
        type: RECIEVE_TAB_ERROR,
        error
    }
}

export const createTab = (param) => dispatch => {
    return TabAPIUtil.createTab(param).then( tab => 
        dispatch(receiveTab(tab)),
        error => dispatch(recieveTabError(error.responseJSON))
    );
};

export const fetchTab = (id) => dispatch => {
    return TabAPIUtil.fetchTab(id).then(tab => 
        dispatch(receiveTab(tab)),
        error => dispatch(recieveTabError(error.responseJSON))
    );
};