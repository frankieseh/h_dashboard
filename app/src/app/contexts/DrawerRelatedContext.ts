import { StudentDetailsData } from "@/types/types";
import { createContext } from "react";

export const DrawerRelatedContext = createContext<{
  studentDetails: StudentDetailsData;
  isDrawerOpen: boolean;
  setStudentDetails: (data: StudentDetailsData) => void;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}>({
  studentDetails: null,
  isDrawerOpen: false,
  setStudentDetails: () => {},
  setIsDrawerOpen: () => {}
});
