import * as SplitUtil from '../util/split_api_util';

export const RECEIVE_ALL_SPLITS = 'RECEIVE_ALL_SPLITS';
export const RECEIVE_SPLIT_ERRORS = 'RECEIVE_SPLIT_ERRORS';

const receiveSplits = (splits) => {
    return {
        type: RECEIVE_ALL_SPLITS,
        splits,
    }
}

const haveErrors = (errors) => {
    return {
        type: RECEIVE_SPLIT_ERRORS,
        errors,
    }
}

export const fetchSplits = () => dispatch => {
    return SplitUtil.fetchSplits().then(
        splits => dispatch(receiveSplits(splits)), 
        error => dispatch(haveErrors(error.responseJSON))
    );
};