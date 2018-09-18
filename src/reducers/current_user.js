export function currentUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username) {
        return user;
    }else{
        return {}
    }
}

export function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function unsetUser() {
    localStorage.setItem('user', null)
}