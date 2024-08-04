
import withAuth from "@/utils/withAuth";
import { Button, Img } from "../../components";
import TaskManager from "../../components/TaskManager";
import React, { Suspense } from "react";

const taskProgressList = [
  {
    todo: "To do",
    taskTitle: "Implement User Authentication",
    taskDescription: "Develop and integrate user authentication using email and password.",
    urgentButton: "Urgent",
    taskDate: "2024-08-15",
    timeAgo: "1 hr ago",
    addNewText: "Add new",
  },
  {
    todo: "To do",
    taskTitle: "Implement User Authentication",
    taskDescription: "Develop and integrate user authentication using email and password.",
    urgentButton: "Urgent",
    taskDate: "2024-08-15",
    timeAgo: "1 hr ago",
    addNewText: "Add new",
  },
  {
    todo: "To do",
    taskTitle: "Implement User Authentication",
    taskDescription: "Develop and integrate user authentication using email and password.",
    urgentButton: "Urgent",
    taskDate: "2024-08-15",
    timeAgo: "1 hr ago",
    addNewText: "Add new",
  },
  {
    todo: "To do",
    taskTitle: "Implement User Authentication",
    taskDescription: "Develop and integrate user authentication using email and password.",
    urgentButton: "Urgent",
    taskDate: "2024-08-15",
    timeAgo: "1 hr ago",
    addNewText: "Add new",
  }
];

const DashboardSection = () => {
  return (
    <>
      {/* dashboard section */}
      <div className="mr-4 md:mr-0">
        <div className="rounded-lg bg-white-a700 p-3">
          <div className="relative h-[540px] content-end md:h-auto">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex flex-1 gap-4 md:relative md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {taskProgressList.map((d, index) => (
                  <TaskManager {...d} key={"todoList" + index} className="mb-[210px] md:mb-0 md:w-full md:gap-3.5" />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(DashboardSection);
