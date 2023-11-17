import { NextAuthOptions } from 'next-auth'
import { CredentialsProvider } from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
// export const getAuthSession = () => getServerSession(authOptions);
export const authConfig: NextAuthOptions = {
  providers: [],
}
