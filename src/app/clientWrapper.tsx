// src/components/ClientWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import NProgress from "nprogress"; 
import "nprogress/nprogress.css"; 
import Loading from "@/app/loading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { TawkToWidget } from "@/components/TawkToWidget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false);

  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = () => {
      document.cookie = "token=; Max-Age=0; path=/;";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    NProgress.start();

    const timeout = setTimeout(() => {
      setLoading(false);
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname]);

  useEffect(() => {
    const storedToken = getCookie("token");
    if (storedToken) {
      setToken(true);
    } else {
      setToken(false);
    }
    router.refresh();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!hasMounted) return null; 

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-white">
          <Loading />
        </div>
      )}
      <div className="transition-opacity duration-300">
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <TawkToWidget />
          <Footer />
        </QueryClientProvider>
      </div>
    </>
  );
}
