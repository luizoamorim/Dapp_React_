export function addUser(user) {
    return {
      type: 'ADD_USER',
      user,
    }
}
  
export function addPhoto(userName, photo) {
    return {
      type: 'ADD_PHOTO',
      userName,
      photo
    }
}