'use client';
import styles from "./StudentTile.module.css";
import { getStudentDetails } from "@/services/apiService";
import { Student, StudentDetailsData } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../Loading/Loading";
import { DrawerRelatedContext } from "@/app/contexts/DrawerRelatedContext";

const StudentTile = (props: { student: Student }) => {
  const { id, name, status } = props.student;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [studentDetails, setStudentDetailsState] = useState<StudentDetailsData>(null);
  const { setStudentDetails, setIsDrawerOpen } = useContext(DrawerRelatedContext);

  const isOnline = (status === 'online');

  const selectStudent = () => {
    setStudentDetails(studentDetails)
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    if (isOnline) {
      getStudentDetails(id).then(data => {
        setStudentDetailsState(data);
        setIsLoading(false);
      }).catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
    }
  }, [id, isOnline]);

  return (<div className={isOnline ? `${styles.student_tile} ${styles.interactive}` : styles.student_tile}
    onClick={selectStudent}
  >
    <h2 className={styles.name}>{name}</h2>
    <div className={styles.current_screen}>
      {!isOnline && <p className={styles.offline}>Offline</p>}
      {isOnline && isLoading && <Loading />}
      {isOnline && !isLoading &&
        (studentDetails?.currentScreen ?
          <Image
            className={styles.current_screen}
            src={studentDetails.currentScreen}
            alt={`Image of ${name}'s current screen`}
            fill={true}
            style={{ objectFit: 'contain' }}
          /> : <p className={styles.online}>Online</p>
        )
      }
    </div>

  </div>);
}

export default StudentTile;