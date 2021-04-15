import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {USER_RESPONSE_AUTHENTIFICATION} from "../../../mocks/__fixtures__/authFixtrures";

const providers = [
    Providers.Credentials({
        name: 'Credentials',
        authorize: async (credentials) => {
            try {
                const { user } = USER_RESPONSE_AUTHENTIFICATION

                if (user) return { status: 'success', data: user }
            } catch (e) {
                throw new Error(e.message)
            }
        }
    })
]

const callbacks = {
    async signIn(user, account, profile) {
        return true
    }
}

export default (req, res) => NextAuth(req, res, { providers, callbacks, pages: { error: '/' } })