const selectUser = (user) => {
    console.log('Actions are working ', user.fname)

    return {
        type: 'USER-SELECTED',
        payload: user
    }
}

export default selectUser;