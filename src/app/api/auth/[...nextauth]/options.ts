import UserModel from "@/app/models/UserModel";
import { dbConnect } from "@/lib/dbConnect";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    ],
    pages: {
        signIn: '/sign-in'
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {

        async signIn({ user }) {
            await dbConnect()

      const existingUser = await UserModel.findOne({ email: user.email });
      if (!existingUser) {
        await UserModel.create({
          name: user.name,
          email: user.email,
          image: user.image,
        });
      }
    
      return true;
    },

        async jwt({token, user}){
            if(user){
                token.name = user.name?.toString(),
                token.email = user.email,
                token.image = user.image
            }
        return token
        },

        async session({session , token}){
            if(token){
              session.user.name = token.name,
              session.user.email = token.email,
              session.user.image = token.image
            }
            return session
        }
    },
     secret: process.env.NEXTAUTH_SECRET,
}