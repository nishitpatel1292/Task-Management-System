"use client";

import { Text, Button, Input, Img, Heading } from "../../components";
import React from "react";

export default function LoginLogin() {
  return (
    <div className="flex w-full justify-center bg-gradient3 pl-[396px] py-[120px] md:p-5">
      <div className="mb-[308px] flex w-[648px] h-[476px] flex-col items-center justify-center gap-8 rounded-[16px] border border-solid border-blue_gray-100 bg-gradient2 p-14 md:w-full md:p-5">
        <Heading size="headingmd" as="h1" className="!font-barlow !text-blue_gray-900_02">
          <span className="text-blue_gray-900_02">Welcome to&nbsp;</span>
          <span className="text-deep_purple-700">Workflo!</span>
        </Heading>
        <div className="flex flex-col gap-7 self-stretch">
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-6">
              <Input shape="round" type="email" name="Email Input" placeholder={`Your email`} />
              <Input
                shape="round"
                type="password"
                name="Password Input"
                placeholder={`Password`}
                suffix={<Img src="img_frame.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />}
                className="gap-4"
              />
            </div>
            <Button
              size="md"
              variant="outline"
              shape="round"
              color="deep_purple_600_02_indigo_200"
              className="self-stretch"
            >
              Login
            </Button>
          </div>
          <div className="mx-11 flex flex-wrap justify-center gap-1 md:mx-0">
            <Text as="p" className="!text-gray-700_02">
              Don’t have an account? Create a
            </Text>
            <Text as="p" className="!text-light_blue-900">
              <span className="text-light_blue-900">new account</span>
              <span className="text-black-900_02">.</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}


