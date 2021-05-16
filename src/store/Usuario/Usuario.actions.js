export function addUser(user) {
    return {
      type: 'ADD_USER',
      user,
    }
}
  
export function addPhoto(userName, photo) {
    console.log("BATE ADD PHOTO")
    return {
      type: 'ADD_PHOTO',
      userName,
      photo
    }
}