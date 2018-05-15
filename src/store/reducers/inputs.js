export default function(store = [], action){
    switch (action.type){
        case'ADD_NEW_FILD':
            store.push({value: '', type : 'text', name: action.payload.name});
            return [...store];
        default:
            return store;
    }
}