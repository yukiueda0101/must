import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";

type WithAuthProps = {};

export const WithAuth = ({ children }: PropsWithChildren<WithAuthProps>) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    // If user is not signed in and the router is ready, redirect to sign in page.
    if (!user) router.push("/auth");
  }, [user, router]);

  // To avoid hydration errors, we need to return null if typeof window is undefined.
  // ref: https://nextjs.org/docs/messages/react-hydration-error
  if (!typeof window || !user) return null;

  return <>{children}</>;
};

export default WithAuth;
