import NextAuth from "next-auth"

 import Google from "next-auth/providers/google"

 import Patreon from "next-auth/providers/patreon"


import type { NextAuthConfig } from "next-auth"


const detailpathname = [
  "/nsfww",
  "/female",
  "/fictional",
  "/dominant",
  "/oc",
  "/submissive",
  "/male",
  "/scenario",
  "/non-human",
  "/anime",
  "/game",
  "/monster-girl",
  "/rpg",
  "/straight",
  "/alien",
  "/hentai",
  "/movie",
  "/lesbian",
  "/detail"
];

function isDetailPathname(pathname: string | undefined): boolean {
  for (const path of detailpathname) {
      // Check for paths with IDs in the range of 1 to 100
      for (let i = 1; i <= 100; i++) {
          const detailPathWithID = `${path}/${i}`;
          if (pathname === detailPathWithID) {
              return true;
          }
      }
  }
  return false;
}


export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
   
    Google,
   
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      
      // Check for "/middleware-example" and "/detail/1" to "/detail/50"
      if (pathname === "/middleware-example") {
        return !!auth;
      }
      
      // Check if pathname is within the range "/detail/1" to "/detail/50"
      if (isDetailPathname(pathname)) {
        return !!auth;
    }
      
      // Otherwise, allow access
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config)
