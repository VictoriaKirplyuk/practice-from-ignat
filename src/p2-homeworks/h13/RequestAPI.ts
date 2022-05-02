export const RequestAPI = {
    firstRequest(checked: boolean) {
        let responseBody = { success: checked }
        return fetch('https://neko-cafe-back.herokuapp.com/auth/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret'
            },
            body: JSON.stringify(responseBody)
        })
    }
}