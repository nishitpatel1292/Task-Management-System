import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Dashboard - Manage Your Tasks Efficiently",
  description:
    "Good morning, Joe! Start your day with the Dashboard to create new tasks, view analytics, and access anywhere. Organize work with tags and collaborate instantly.",
  //ogTitle:'...'
};

export default function DashboardPage() {
  return <Page />;
}
