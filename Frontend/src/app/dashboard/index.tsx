"use client";

import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, DatePicker, Input } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import DashboardSection from "./DashboardSection";
import React from "react";

export default function DashboardPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <div className="flex w-full items-start bg-gray-100_02">
      <Sidebar1 />
      <div className="mt-6 flex flex-1 flex-col gap-4 px-4">
        <div className="mr-4 flex flex-col gap-4 md:mr-0">
          <Header />
          <div className="flex md:flex-col">
            <Input
              size="xs"
              shape="round"
              name="Search Field"
              placeholder={`Search`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#797979ff" />
                ) : (
                  <Img
                    src="img_rewind.svg"
                    width={24}
                    height={24}
                    alt="Rewind"
                    className="h-[24px] w-[24px] cursor-pointer"
                  />
                )
              }
              className="w-[18%] gap-4 border border-solid border-gray-200 text-gray-600_02 md:w-full"
            />
            <div className="flex flex-1 justify-center gap-4 md:flex-col md:self-stretch">
              <div className="flex flex-1 justify-end md:self-stretch sm:flex-col">
                <DatePicker
                  name="Date Picker"
                  placeholder={`Calendar view`}
                  className="flex w-[22%] gap-3.5 rounded bg-gray-100_01 p-2 text-[16px] text-gray-600_02 sm:w-full"
                />
                <div className="ml-4 flex items-center gap-3.5 rounded bg-gray-100_01 p-2 sm:ml-0">
                  <Text size="texts" as="p">
                    Automation
                  </Text>
                  <Img
                    src="img_frame_4.svg"
                    width={24}
                    height={24}
                    alt="Automation Image"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <Button
                  size="sm"
                  rightIcon={
                    <Img src="img_frame_5.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />
                  }
                  className="ml-4 min-w-[92px] gap-3.5 rounded sm:ml-0"
                >
                  Filter
                </Button>
                <Button
                  size="sm"
                  rightIcon={
                    <Img src="img_frame_6.svg" width={24} height={24} alt="Frame" className="h-[24px] w-[24px]" />
                  }
                  className="ml-4 min-w-[98px] gap-3.5 rounded sm:ml-0"
                >
                  Share
                </Button>
              </div>
              <Button
                size="sm"
                variant="outline"
                shape="round"
                color="deep_purple_600_02_indigo_200"
                rightIcon={
                  <Img
                    src="img_frame_white_a700.svg"
                    width={24}
                    height={24}
                    alt="Frame"
                    className="h-[24px] w-[24px]"
                  />
                }
                className="min-w-[136px] h-[40px] gap-2 font-medium !shadow-xs border-none"
              >
                Create new
              </Button>
            </div>
          </div>
        </div>

        {/* dashboard section */}
        <DashboardSection />
      </div>
    </div>
  );
}
