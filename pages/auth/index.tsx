import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useRouter } from "next/router";

const AuthPage = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // If user is signed in, redirect to home page.
      router.push("/");
    }
  }, [user, router]);

  return (
    <Container maxWidth="xs">
      <Box pt={12}>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </Box>
    </Container>
  );
};

export default AuthPage;
