import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "User Login - Access Your Workflo Account",
  description:
    "Welcome to Workflo! Log in to access your dashboard, manage tasks, and collaborate with teams. Don\\'t have an account? Sign up today.",
  //ogTitle:'...'
};

export default function LoginPage() {
  return <Page />;
}
