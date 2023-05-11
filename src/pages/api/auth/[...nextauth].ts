import axios from 'axios';
import { NextAuthOptions, Session } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import { LOGIN } from '@/constant/constants';
import { LoginResponse } from '@/utils/appTypes';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Login Form',
      id: 'login',
      credentials: {
        email: {
          label: 'email',
          type: 'string',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const data: {
            email: string;
            password: string;
          } = {
            email: credentials?.email as string,
            password: credentials?.password as string,
          };

          const user = await axios.post(
            String(`${process.env.NEXT_PUBLIC_DEV_URL}${LOGIN}`),
            data
          );

          return user.data.data as LoginResponse;
        } catch (error) {
          // handle errors here
        }
        return null;
      },
    }),
  ],
  pages: {
    error: '/app/login',
    signIn: '/app/login',
    signOut: '/app/login',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 330 days
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    jwt: ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: ({ session, token }) => {
      const newSession: Session = {
        token: token.user.token,
        user: {
          id: token.user.id,
          firstName: token.user.firstName,
          lastName: token.user.lastName,
          email: token.user.email,
          phone: token.user.phone,
          type: token.user.type,
          company: {
            address: token.user.company.address,
            alternateContactPhone: token.user.company.alternateContactPhone,
            id: token.user.company.id,
            companyName: token.user.company.companyName,
            logo: token.user.company.logo,
            email: token.user.company.email,
            state: token.user.company.state,
            landmark: token.user.company.landmark,
            contactPhone: token.user.company.contactPhone,
            status: token.user.company.status,
            token: token.user.company.token,
            tokenExpiry: token.user.company.tokenExpiry,
          },
          token: '',
        },
        expires: '',
      };

      session = newSession;

      return session;
    },
  },
};

export default NextAuth(authOptions);
