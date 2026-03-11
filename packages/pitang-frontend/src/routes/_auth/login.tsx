import { createFileRoute } from "@tanstack/react-router";

import { LoginForm, type SignInForm } from "@/components/login-form";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  function handleLogin(
    event: React.FormEvent<HTMLFormElement>,
    data: SignInForm,
  ) {
    event.preventDefault();

    console.log(data);
  }

  return <LoginForm onSubmit={handleLogin} />;
}
