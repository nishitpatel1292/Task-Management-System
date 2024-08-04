"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/store/auth";
import LoginLogin from "./login/LoginLogin";

const Home = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const publicRoutes = ['/login', '/signup']; 

  useEffect(() => {
   if (!isAuthenticated && !publicRoutes.includes(router.pathname)) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return null;
};

const Page = () => {
  return (
      <LoginLogin />
  );
};

export default Page;