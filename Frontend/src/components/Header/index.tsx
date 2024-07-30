import { Text, Heading, Img } from "./..";
import Link from "next/link";
import React, { Suspense } from "react";

const featureIntroductionList = [
  {
    tagsImage: "img_undraw_opinion_re_jix4.svg",
    tagsHeading: "Introducing tags",
    tagsDescription:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
  },
  {
    tagsImage: "img_undraw_share_link_re_54rx.svg",
    tagsHeading: "Share Notes Instantly",
    tagsDescription:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
  },
  {
    tagsImage: "img_thumbs_up.svg",
    tagsHeading: "Access Anywhere",
    tagsDescription:
      "Sync your notes across all devices. Stay productive whether you&#39;re on your phone, tablet, or computer.",
  },
];
interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props} className={`${props.className} flex flex-col gap-4`}>
      <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
        <Heading size="headingmd" as="h1" className="!font-barlow !text-black-900_01">
          Good morning, Joe!
        </Heading>
        <div className="flex items-center gap-2">
          <Text size="texts" as="p" className="!text-black-900_01">
            Help & feedback
          </Text>
          <Link href="#">
            <Img
              src="img_frame_black_900_01.svg"
              width={24}
              height={24}
              alt="Support Image"
              className="h-[24px] w-[24px]"
            />
          </Link>
        </div>
      </div>
      <div className="flex gap-2 self-stretch md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
          {featureIntroductionList.map((d, index) => (
            <div
              key={"featuresList" + index}
              className="flex w-[32%] items-center gap-2.5 rounded-lg border border-solid border-gray-100 bg-white-a700 px-4 py-[22px] md:w-full sm:py-5"
            >
              <Img
                src={d.tagsImage}
                width={76}
                height={60}
                alt="Tags Image"
                className="h-[60px] w-[24%] object-contain"
              />
              <div className="flex flex-1 flex-col items-start">
                <Heading as="h6">{d.tagsHeading}</Heading>
                <Text size="textxs" as="p" className="w-full leading-4 !text-gray-600_01">
                  {d.tagsDescription}
                </Text>
              </div>
            </div>
          ))}
        </Suspense>
      </div>
    </header>
  );
}
