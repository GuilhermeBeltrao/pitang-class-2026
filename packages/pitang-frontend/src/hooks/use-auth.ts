import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import type { SignInForm } from "@/components/login-form";
import { useEffect, useState, type SubmitEvent } from "react";
import type { LoggedUser } from "@/types";

const baseURL = "https://dummyjson.com";

function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

export function useAuth() {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthenticatedUser() {
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

    getAuthenticatedUser();
  }, []);

  async function handleLogout() {
    document.cookie = "@pitang/accessToken=; path=/; Max-Age=0";
    setLoggedUser(null);
    setIsAuthenticated(false);
    navigate({ to: "/login" });
  }

  async function handleLogin(
    event: SubmitEvent<HTMLFormElement>,
    data: SignInForm,
  ) {
    event.preventDefault();

    const response = await fetch(`${baseURL}/auth/login`, {
      body: JSON.stringify({
        expiresInMins: 30,
        username: data.username,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const json = await response.json();

    if (!response.ok) {
      return toast.error(json.message);
    }

    toast.success("Welcome...");

    document.cookie = `@pitang/accessToken=${json.accessToken}; path=/; Max-Age=86400`;
    setLoggedUser(json);
    setIsAuthenticated(true);

    navigate({ to: "/dashboard" });
  }

  return {
    loggedUser,
    isLoading,
    isAuthenticated,
    handleLogin,
    handleLogout,
  };
}
