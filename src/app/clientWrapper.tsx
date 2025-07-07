// src/components/ClientWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import NProgress from "nprogress"; // Optional visual indicator
import "nprogress/nprogress.css"; // Import NProgress styles
import Loading from "@/app/loading";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<boolean>(false);
  console.log('token', token)

  const handleToken = () => {
    setToken(true);
  };
   

  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    NProgress.start(); // Optional

    // Simulate loading for route change
    const timeout = setTimeout(() => {
      setLoading(false);
      NProgress.done(); // Optional
    }, 500); // Adjust delay as needed

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      handleToken();
    } else {
      setToken(false);
    }
       router.refresh();

  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-white">
          <Loading />
        </div>
      )}

      <div className="transition-opacity duration-300">
        <Header   setToken={setToken} token={token}/>
        {children}
        <Footer />
      </div>
    </>
  );
}
