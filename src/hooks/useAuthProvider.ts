import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import { AuthBindings } from "@refinedev/core";
import { useState } from "react";

export interface AuthProviderHookResult {
    authProvider: AuthBindings;
    token?: string;
    isLoading: boolean;
}
export const useAuthProvider = (): AuthProviderHookResult => {
    const { isLoading, user, logout, login, getToken } = useKindeAuth();
    const [authToken, setAuthToken] = useState<string | undefined>(undefined);
    const authProvider = {
      login: async () => {
        await login({});
        return {
          success: true,
        };
      },
      logout: async () => {
        await logout();
        setAuthToken(undefined);
        return {
          success: true,
        };
      },
      onError: async (error: any) => {
        console.error(error);
        return { error };
      },
      check: async () => {
        try {
          const token = await getToken();
          if (token) {
              setAuthToken(token);
            return {
              authenticated: true,
            };
          } else {
              setAuthToken(undefined);
            return {
              authenticated: false,
              error: {
                message: "Check failed",
                name: "Token not found",
              },
              redirectTo: "/login",
              logout: true,
            };
          }
        } catch (error: any) {
          return {
            authenticated: false,
            error: new Error(error),
            redirectTo: "/login",
            logout: true,
          };
        }
      },
      getPermissions: async () => null,
      getIdentity: async () => {
        if (user) {
          return {
            ...user,
            avatar: user.picture,
          };
        }
        return null;
      },
    };
    return {
      authProvider,
      isLoading,
      token: authToken
    };
  };