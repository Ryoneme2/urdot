import clsx from "clsx";
import React from "react";
import { signIn } from "next-auth/react";
import type {
  BuiltInProviderType,
  RedirectableProviderType,
} from "next-auth/providers";

type Props = {
  icon?: React.ReactNode;
  context: string;
  provider: RedirectableProviderType | BuiltInProviderType;
};

const SignProvider = ({ icon, context, provider }: Props) => {
  return (
    <div
      className={clsx(
        "flex h-12 w-full items-center justify-start rounded-2xl border-2 border-gray-300 px-3 transition-all hover:border-blue-200 hover:text-blue-200",
        {
          "justify-center": icon === undefined,
          "justify-start": icon !== undefined,
        }
      )}
    >
      <div className="mr-4">{icon}</div>
      <div onClick={() => signIn(provider)}>{context}</div>
    </div>
  );
};

export default SignProvider;
