const users = [{
    userName: 'luizoamorim',
    userPass: '1234',
    photos: []
}]

export default function usuarioReducer(state = users, action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user]
        case 'ADD_PHOTO':
            const user = state.find(us => action.userName === us.userName);
            const others = state.find(us => action.userName !== us.userName);
            return [...others, {...user, photos: user.photos.push(action.photo)}]
        default:
            return state                
    }    
}