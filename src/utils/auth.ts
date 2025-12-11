// src/utils/auth.ts
import Cookies from "js-cookie";
import { parseCookies, destroyCookie } from "nookies";

// Client-side login
export const setAdminAuth = () => {
  Cookies.set("isAdmin", "true", { expires: 1 });
};

// Client-side logout
export const removeAdminAuth = () => {
  Cookies.remove("isAdmin");
};

// Client-side check
export const isAdminLoggedIn = () => {
  return Cookies.get("isAdmin") === "true";
};

// Server-side check
export const getAdminAuthFromServer = (ctx: any) => {
  const cookies = parseCookies(ctx);
  return cookies.isAdmin === "true";
};

// Server-side logout
export const removeAdminAuthServer = (ctx: any) => {
  destroyCookie(ctx, "isAdmin");
};
