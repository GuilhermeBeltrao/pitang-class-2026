import React, { createContext, useContext, useEffect, useState } from "react";
import type { LoggedUser } from "@/types";

function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

interface AuthContextType {
  loggedUser: LoggedUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  loggedUser: null,
  isLoading: true,
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const token = getCookie("@pitang/accessToken");

        if (!token) {
          setIsLoading(false);
          setIsAuthenticated(false);
          return;
        }

        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          setIsAuthenticated(false);
          return;
        }

        const user = await response.json();
        setLoggedUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth error:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        isLoading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
}

export async function checkAuthStatus(): Promise<{
  isAuthenticated: boolean;
  user: LoggedUser | null;
}> {
  try {
    const token = getCookie("@pitang/accessToken");

    if (!token) {
      return { isAuthenticated: false, user: null };
    }

    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return { isAuthenticated: false, user: null };
    }

    const user = await response.json();
    return { isAuthenticated: true, user };
  } catch (error) {
    console.error("Auth check error:", error);
    return { isAuthenticated: false, user: null };
  }
}
