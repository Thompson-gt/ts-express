import bcrypt from 'bcrypt'

const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    const hash: string = await bcrypt.hash(password, 10)
    return hash
}

export default hashPassword