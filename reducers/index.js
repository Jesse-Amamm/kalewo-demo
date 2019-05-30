import{TRUE_HOME, TRUE_SEARCH,
    TRUE_ACCOUNT, 
    TRUE_HELP, FALSE_HELP, FALSE_HOME, FALSE_MyList,
    TRUE_LOGGEDIN, TRUE_MyList, 
    FALSE_LOGGEDIN, FALSE_SEARCH, TRUE_MORE, FALSE_MORE,
    FALSE_ACCOUNT, FALSE_NOT, TRUE_NOT, setPP} from "../constants/action-types";
const initialState = {
    more: false,
    home: true,
    search: false,
    account: false,
    myList: false,
    help: false,
    loggedIn: false,
    not: false,
    PP: ''
};
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case TRUE_NOT:
            return{
                ...state,
             not: true
            };
        case FALSE_NOT:
            return{
                ...state,
                not: false
            };
        case TRUE_HOME:
            return{
                ...state,
             home: true
            };
        case FALSE_HOME:
            return{
                ...state,
                home: false
            };
        case TRUE_SEARCH:
            return{
                ...state,
             search: true
            };
        case FALSE_SEARCH:
            return{
                ...state,
                search: false
            };   
        case TRUE_ACCOUNT:
            return{
                ...state,
                account: true
            };
        case FALSE_ACCOUNT:
            return{
                ...state,
                account: false
            };
        case TRUE_HELP:
            return{
                ...state,
                help: true
            };
        case FALSE_HELP:
            return{
                ...state,
                help: false
            };
        case TRUE_MyList:
            return{
                ...state,
                myList: true
            };
        case FALSE_MyList:
            return{
                ...state,
                myList: false
            };
        case TRUE_MORE:
            return{
                ...state,
                more: true
            };
        case FALSE_MORE:
            return{
                ...state,
                more: false
            };
            case TRUE_LOGGEDIN:
            return{
                ...state,
                loggedIn: true
            };
        case FALSE_LOGGEDIN:
            return{
                ...state,
                loggedIn: false
            };
        case setPP:
            return{
                ...state,
                PP: action.payload
            };    
        default:
            return state
    }
}
export default rootReducer;