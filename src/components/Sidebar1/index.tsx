"use client";

import { Button, Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  // use this function to collapse/expand the sidebar
  // function collapseSidebar() {
  //    setCollapsed(!collapsed)
  // }
  return (
    <Sidebar
      {...props}
      width="286px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-[100vh] pt-6 top-0 px-4 sm:pt-5 !border-gray-300_03 !border-r !border-solid bg-white-a700 !sticky overflow-auto`}
    >
      <Img src="img_logo.svg" width={252} height={78} alt="Logo" className="h-[78px] w-full" />
      
      <Menu
        menuItemStyles={{
          button: {
            padding: "6px",
            gap: "14px",
            color: "#797979",
            fontWeight: 400,
            fontSize: "20px",
            borderColor: "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "4px",
            [`&:hover, &.ps-active`]: { borderColor: "#dcdcdc", backgroundColor: "#f3f3f3 !important" },
          },
        }}
        className="mt-4 flex w-full flex-col self-stretch mb-2"
      >
        <MenuItem
          icon={
            <Img src="img_frame_gray_600_02.svg" width={24} height={24} alt="Home Icon" className="h-[24px] w-[24px]" />
          }
        >
          Home
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_frame_gray_600_02_24x24.svg"
              width={24}
              height={24}
              alt="Boards Icon"
              className="h-[24px] w-[24px]"
            />
          }
        >
          Boards
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_frame_24x24.svg" width={24} height={24} alt="Settings Icon" className="h-[24px] w-[24px]" />
          }
        >
          Settings
        </MenuItem>
        <MenuItem
          icon={<Img src="img_frame_1.svg" width={24} height={24} alt="Teams Icon" className="h-[24px] w-[24px]" />}
        >
          Teams
        </MenuItem>
        <MenuItem
          icon={<Img src="img_frame_2.svg" width={24} height={24} alt="Analytics Icon" className="h-[24px] w-[24px]" />}
        >
          Analytics
        </MenuItem>
      </Menu>
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
        className="min-w-[253px] h-[52px] gap-2 mt-2 font-medium !shadow-xs border-none"
      >
        Create new
      </Button>
      {!collapsed ? (
        <div className="mt-auto">
          <Button
            size="lg"
            shape="round"
            leftIcon={<Img src="img_download.svg" width={40} height={40} alt="Download" className="h-[40px] w-[40px]" />}
            className="mb-4 w-[253px] h-[61px] bg-[#f3f3f3] mt-auto gap-2 text-[#666666]  self-stretch font-inter"
          >
            <div className="text flex flex-col gap-1">
              <p className="font-[500]  text-[20px]">
                Download the app
              </p>
              <p className="font-[400] text-[14px]">
                Get the full experience</p>
            </div>
          </Button>
        </div>
      ) : null}
    </Sidebar>
  );
}
