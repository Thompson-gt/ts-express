

const checkEmail = (email: string) => {
    if (email.includes("@") && email.includes(".com")) {
        return true
    }
}

export default checkEmail