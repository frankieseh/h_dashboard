'use client';
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getStudents } from "@/services/apiService";
import { StudentDetailsData, StudentsData } from "@/types/types";
import StudentTile from "@/components/StudentTile/StudentTile";
import Loading from "@/components/Loading/Loading";
import { DrawerRelatedContext } from "./contexts/DrawerRelatedContext";
import StudentDetailsDrawer from "@/components/StudentDetailsDrawer/StudentDetailsDrawer";

export default function Dashboard() {
  const [students, setStudents] = useState<StudentsData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // For drawer
  const [studentDetails, setStudentDetails] = useState<StudentDetailsData>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const provider = { studentDetails, isDrawerOpen, setStudentDetails, setIsDrawerOpen };

  useEffect(() => {
    getStudents().then(data => {
      setStudents(data);
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsLoading(false);
    });
  }, []);



  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <DrawerRelatedContext.Provider value={provider}>
          {isLoading ? <Loading /> :
            !isLoading && students ? students.map((student, index) =>
              <StudentTile key={index} student={student} ></StudentTile>
            ) : <p>Students could not be retrieved</p>
          }
          <StudentDetailsDrawer></StudentDetailsDrawer>
        </DrawerRelatedContext.Provider>
      </main>
    </div>
  );
}
