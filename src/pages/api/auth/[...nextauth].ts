import axios from 'axios';
import { NextAuthOptions, Session, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import logger from '@/lib/logger';

import { BASE_URL } from '@/api/globalApi';
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

          const user = await axios.post(String(`${BASE_URL}${LOGIN}`), data);

          return user.data.data as LoginResponse;
        } catch (error) {
          // handle errors here
        }
        return null;
      },
    }),
    CredentialsProvider({
      name: 'Update Session',
      id: 'update',
      credentials: {
        token: {
          label: 'token',
          type: 'string',
        },
        id: {
          label: 'id',
          type: 'string',
        },
        firstName: {
          label: 'firstName',
          type: 'string',
        },
        lastName: {
          label: 'lastName',
          type: 'string',
        },
        email: {
          label: 'email',
          type: 'string',
        },
        phone: {
          label: 'phone',
          type: 'string',
        },
        type: {
          label: 'type',
          type: 'string',
        },
        address: {
          label: 'address',
          type: 'string',
        },
        alternateContactPhone: {
          label: 'alternateContactPhone',
          type: 'string',
        },
        company_id: {
          label: 'company_id',
          type: 'string',
        },
        companyName: {
          label: 'companyName',
          type: 'string',
        },
        logo: {
          label: 'logo',
          type: 'string',
        },
        company_email: {
          label: 'company_email',
          type: 'string',
        },
        state: {
          label: 'state',
          type: 'string',
        },
        landmark: {
          label: 'landmark',
          type: 'string',
        },
        contactPhone: {
          label: 'contactPhone',
          type: 'string',
        },
        status: {
          label: 'status',
          type: 'string',
        },
        company_token: {
          label: 'company_token',
          type: 'string',
        },
        tokenExpiry: {
          label: 'tokenExpiry',
          type: 'string',
        },
      },
      async authorize(credentials) {
        try {
          const data: User = {
            token: credentials?.token as string,
            id: credentials?.id as string,
            firstName: (credentials?.firstName || '') as string,
            lastName: (credentials?.lastName || '') as string,
            email: (credentials?.email || '') as string,
            phone: (credentials?.phone || '') as string,
            type: (credentials?.type || '') as 'owner' | 'teamMember',
            company: {
              address: (credentials?.address || '') as string,
              alternateContactPhone: (credentials?.alternateContactPhone ||
                '') as string,
              id: (credentials?.company_id || '') as string,
              companyName: (credentials?.companyName || '') as string,
              logo: (credentials?.logo || '') as string,
              email: (credentials?.company_email || '') as string,
              state: (credentials?.state || '') as string,
              landmark: (credentials?.landmark || '') as string,
              contactPhone: (credentials?.contactPhone || '') as string,
              status: (credentials?.status || '') as string,
              token: (credentials?.company_token || '') as string,
              tokenExpiry: (credentials?.tokenExpiry || '') as unknown as Date,
            },
          };

          return data;
        } catch (error) {
          //  handle error
          logger(error);
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
