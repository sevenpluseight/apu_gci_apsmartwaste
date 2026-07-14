import { Suspense } from "react";
import AuthenticateContent from "../authenticate/AuthenticationContent";

export default function AuthenticatePage() {
  return (
    <Suspense fallback={null}>
      <AuthenticateContent />
    </Suspense>
  );
}
