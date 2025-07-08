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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TawkToWidget } from "@/components/TawkToWidget";
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

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
    const storedToken = localStorage.getItem("token");
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

  if (!hasMounted) return null; // Prevent hydration mismatch

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-white">
          <Loading />
        </div>
      )}
      <div className="transition-opacity duration-300">
        <Header setToken={setToken} token={token} />
        {children}
         <TawkToWidget />
        <Footer />
      </div>
    </>
  );
}
