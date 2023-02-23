export function validator(user, api) {
    let value = true

    api.forEach(element => {
        if (element.name === user.name) value = false
    });
    return value
}

export function observerCreater(callBack, root, thres){
    return new IntersectionObserver(callBack, {
        root: root,
        rootMargin: '10px',
        threshold: thres
    })
}
