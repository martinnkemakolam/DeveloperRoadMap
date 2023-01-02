export function validator(user, api) {
    let value = true

    api.forEach(element => {
        if (element.name === user.name) value = false
    });
    return value
}