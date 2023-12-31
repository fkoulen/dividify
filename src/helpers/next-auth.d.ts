import { Account as NextAuthAccount, DefaultSession, Session } from "next-auth"
import { JWT as NextAuthJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      id?: string | null
    }
    accessToken?: string
    error?: string
    expires: string
  }

  interface Account extends NextAuthAccount {
    expires_at: number
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthJWT {
    accessToken?: string
    refreshToken?: string
    accessTokenExpires?: number
    error?: string
    user?: Session["user"]
  }
}
