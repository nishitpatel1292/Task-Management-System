"use client";

import baseApiUrl from "@/utils/baseApiUrl";
import { Text, Button, Input, Img, Heading } from "../../components";
import Link from "next/link";
import React, { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupClick = async () => {
    try {
      const response = await fetch(`${baseApiUrl}/api/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Signup successful:', data);
      // Redirect or perform other actions after successful signup
    } catch (error) {
      console.error('There was a problem with the signup request:', error);
    }
  };

  return (
    <div className="flex w-full justify-center bg-gradient3 md:p-5 h-[100vh]">
      <div className="flex w-[648px] mt-[90px] h-[556px] flex-col items-center justify-center gap-8 rounded-[16px] border border-solid border-blue_gray-100 bg-gradient2 p-[60px] md:w-full md:p-5">
        <Heading size="headingmd" as="h1" className="!font-barlow !text-blue_gray-900_02">
          <span className="text-blue_gray-900_02">Welcome to&nbsp;</span>
          <span className="text-deep_purple-700">Workflo!</span>
        </Heading>
        <div className="flex flex-col gap-7 self-stretch">
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-6">
              <Input shape="round" type="username" name="username" placeholder={`Full name`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input shape="round" type="email" name="email" placeholder={`Your email`} value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                shape="round"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={`Password`}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                suffix={<Img src="img_frame.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px] cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                className="gap-4"
              />
            </div>
            <Button
              size="md"
              variant="outline"
              shape="round"
              color="deep_purple_600_02_indigo_200"
              className="self-stretch border-none"
              onClick={handleSignupClick}
            >
              Signup
            </Button>
          </div>
          <div className="mx-11 flex flex-wrap justify-center gap-1 md:mx-0">
            <Text as="p" className="!text-gray-700_02">
              Already have an account?
            </Text>

            <Link href={'/login'}>
              <Text as="p" className="!text-light_blue-900">
                <span className="text-light_blue-900">Login</span>
                <span className="text-black-900_02">.</span>
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


