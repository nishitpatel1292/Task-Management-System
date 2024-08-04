import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "User Register - Create Your Workflo Account",
  description:
    "Welcome to Workflo! Create your account to explore features of Workflo! Access your dashboard, manage tasks, and collaborate with teams.",
  //ogTitle:'...'
};

export default function SignupPage() {
  return <Page />;
}
