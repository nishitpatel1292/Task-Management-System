import React from "react";
import Link from "next/link";
const Home = (): JSX.Element  => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/login" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Login
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/dashboard" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
