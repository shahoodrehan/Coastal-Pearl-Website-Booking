// src/utils/auth.ts
import Cookies from "js-cookie";
import { parseCookies, destroyCookie } from "nookies";
import { NextRouter } from "next/router";

// --------------------
// Client-side login
// --------------------
export const setAdminAuth = (token?: string) => {
  // Set a cookie to remember admin login
  Cookies.set("isAdmin", "true", { expires: 1, sameSite: "lax" });

  // Optional: store auth token
  if (token) Cookies.set("adminToken", token, { expires: 1, sameSite: "lax" });
};

// --------------------
// Client-side logout
// --------------------
export const removeAdminAuth = (router?: any) => {
  Cookies.remove("isAdmin");
  Cookies.remove("adminToken");

  if (router) router.replace("/"); // replaces history entry
};

// --------------------
// Client-side check
// --------------------
export const isAdminLoggedIn = (): boolean => {
  return Cookies.get("isAdmin") === "true";
};

// --------------------
// Server-side check
// --------------------
export const getAdminAuthFromServer = (ctx: any): boolean => {
  const cookies = parseCookies(ctx);
  return cookies.isAdmin === "true";
};

// --------------------
// Server-side logout
// --------------------
export const removeAdminAuthServer = (ctx: any) => {
  destroyCookie(ctx, "isAdmin");
  destroyCookie(ctx, "adminToken");
};
