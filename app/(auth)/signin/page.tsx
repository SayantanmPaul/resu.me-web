import AuthDivider from "@/components/auth/AuthDivider";
import SignInForm from "@/components/auth/SignInForm";
import SignUpWithGoogle from "@/components/auth/SignUpWithGoogle";
import BrandLogo from "@/components/ui/common/BrandLogo";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex w-full max-w-[340px] flex-col gap-6">
      <BrandLogo className="w-12 h-12" />
      <div className="flex flex-col">
        <h2 className="font-brand text-[28px] font-semibold tracking-normal text-zinc-950 antialiased">
          Welcome back!
        </h2>
        <p className="space-y-2 font-body text-xs font-semibold text-muted-foreground">
          Sign in to your account below.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <SignUpWithGoogle />
        <AuthDivider />
        {/* sign up form */}
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
