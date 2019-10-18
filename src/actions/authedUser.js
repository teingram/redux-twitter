export const AUTHED_USER = 'AUTHED_USER'

export function setAuthedUser(id) {
    console.log(id)
    return {
        type: AUTHED_USER,
        id
    }
}