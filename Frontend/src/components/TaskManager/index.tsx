import { Img, Text, Heading, Button } from "./..";
import React from "react";

interface Props {
  className?: string;
  todo?: React.ReactNode;
  taskTitle?: React.ReactNode;
  taskDescription?: React.ReactNode;
  urgentButton?: string;
  taskDate?: React.ReactNode;
  timeAgo?: React.ReactNode;
  addNewText?: React.ReactNode;
}

export default function TaskManager({
  todo = "To do",
  taskTitle = "Implement User Authentication",
  taskDescription = "Develop and integrate user authentication using email and password.",
  urgentButton = "Urgent",
  taskDate = "2024-08-15",
  timeAgo = "1 hr ago",
  addNewText = "Add new",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[26%] gap-3.5`}>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <Text as="p" className="!text-gray-700_01">
          {todo}
        </Text>
        <Img src="img_frame_gray_700_01.svg" width={24} height={24} alt="Task Image" className="h-[24px] w-[24px]" />
      </div>
      <div className="flex flex-col gap-4 self-stretch rounded-lg border border-solid border-gray-300_03 bg-gray-50 px-3 py-3.5">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col gap-0.5 self-stretch">
            <Text size="texts" as="p" className="!font-medium leading-[19px] !text-gray-700_02">
              {taskTitle}
            </Text>
            <Text size="textxs" as="p" className="leading-4">
              {taskDescription}
            </Text>
          </div>
          <Button shape="round" className="min-w-[54px]">
            {urgentButton}
          </Button>
          <div className="flex items-center gap-2 self-stretch">
            <Img
              src="img_frame_gray_700_02.svg"
              width={24}
              height={24}
              alt="Date Image"
              className="h-[24px] w-[24px]"
            />
            <Heading size="headingxs" as="p" className="!text-gray-700_02">
              {taskDate}
            </Heading>
          </div>
        </div>
        <div className="flex">
          <Text size="textxs" as="p" className="!font-medium">
            {timeAgo}
          </Text>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch rounded-lg bg-gradient1 p-2">
        <Text size="texts" as="p" className="!text-gray-300_02">
          {addNewText}
        </Text>
        <Img src="img_frame_gray_300_02.svg" width={24} height={24} alt="Add Image" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
