  "use client";

  import baseApiUrl from "@/utils/baseApiUrl";
  import { Text, Button, Input, Img, Heading } from "../../components";
  import Link from "next/link";
  import React, { useState } from "react";
  import { useRouter } from "next/navigation";
import { useAuth } from "@/store/auth";

  export default function LoginLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {login} = useAuth();

    const handleLoginClick = async () => {
      try {
        const response = await fetch(`${baseApiUrl}/api/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          credentials: 'include'
        })

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        if(response.ok){
          const res_data = await response.json()
          console.log("from server",res_data)
          login(res_data.token)
          
          router.push('/dashboard')
        }
        
        console.log('Login successfull');
        // Redirect or perform other actions after successful login
      } catch (error) {
        console.error('There was a problem with the Login request:', error);
      }
    };

    return (
      <div className="flex w-full justify-center bg-gradient3 md:p-5 h-[100vh]">
        <div className="flex w-[648px] mt-[90px] h-[476px] flex-col items-center justify-center gap-8 rounded-[16px] border border-solid border-blue_gray-100 bg-gradient2 p-[60px] md:w-full md:p-5">
          <Heading size="headingmd" as="h1" className="!font-barlow !text-blue_gray-900_02">
            <span className="text-blue_gray-900_02">Welcome to&nbsp;</span>
            <span className="text-deep_purple-700">Workflo!</span>
          </Heading>
          <div className="flex flex-col gap-7 self-stretch">
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-col gap-6">
                <Input shape="round" type="email" name="Email Input" placeholder={`Your email`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  shape="round"
                  type={showPassword ? "text" : "password"}
                  name="Password Input"
                  placeholder={`Password`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </div>
            <div className="mx-11 flex flex-wrap justify-center gap-1 md:mx-0">
              <Text as="p" className="!text-gray-700_02">
                Don’t have an account? Create a
              </Text>

              <Link href={'/signup'}>

                <Text as="p" className="!text-light_blue-900">
                  <span className="text-light_blue-900">new account</span>
                  <span className="text-black-900_02">.</span>
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }


