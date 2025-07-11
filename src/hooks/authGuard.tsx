// components/AuthGuard.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/"); // 🔒 Redirect to login page
    } else {
      setChecked(true);
      router.push('/dashboard'); // 🔒 Redirect to dashboard if authenticated
    }
  }, [router]);

  if (!checked) return null; // ⏳ Prevent flashing protected content

  return <>{children}</>;
};

export default AuthGuard;
