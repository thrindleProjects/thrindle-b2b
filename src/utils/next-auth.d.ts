import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string;
    user: {
      token: string;
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      company: {
        id: string;
        companyName: string;
        logo: string;
        email: string;
        address: string;
        state: string;
        landmark: string;
        contactPhone: string;
        alternateContactPhone: string;
        status: string;
        token: string;
        tokenExpiry: Date;
        companyCode: string;
        isVIP: boolean;
      };
      type: 'owner' | 'teamMember';
    };
    expires: ISODateString;
  }

  interface User {
    token: string;
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    company: {
      id: string;
      companyName: string;
      logo: string;

      email: string;
      address: string;
      state: string;
      landmark: string;
      contactPhone: string;
      alternateContactPhone: string;
      status: string;
      token: string;
      tokenExpiry: Date;
      companyCode: string;
      isVIP: boolean;
    };
    type: 'owner' | 'teamMember';
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    /** OpenID ID Token */
    user: {
      token: string;
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      company: {
        id: string;
        companyName: string;
        logo: string;
        email: string;
        address: string;
        state: string;
        landmark: string;
        contactPhone: string;
        alternateContactPhone: string;
        status: string;
        token: string;
        tokenExpiry: Date;
        companyCode: string;
        isVIP: boolean;
      };
      type: 'owner' | 'teamMember';
    };
  }
}
