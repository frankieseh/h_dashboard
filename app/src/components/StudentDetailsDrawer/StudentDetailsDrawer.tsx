'use client';
import { DrawerRelatedContext } from "@/app/contexts/DrawerRelatedContext";
import styles from "./StudentDetailsDrawer.module.css";
import { useContext } from "react";

const StudentDetailsDrawer = () => {
  const { studentDetails, isDrawerOpen, setIsDrawerOpen } = useContext(DrawerRelatedContext);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const getReadableTime = (time: string) => {
    const timeSinceEpoch = parseInt(time);
    const d = new Date(0);
    d.setUTCSeconds(timeSinceEpoch);
    return d.toLocaleString();
  }

  return (
    <>
      {isDrawerOpen && <div className={styles.student_details_drawer}>
        {studentDetails?.id ?
          <>
            <header>
              <button onClick={closeDrawer} className={styles.close}>Close</button>
              {studentDetails.name &&
                <h2>{studentDetails.name}</h2>
              }
            </header>
            {studentDetails.currentUrl &&
              < section >
                <h3>Current Tab</h3>
                <p>{studentDetails.currentUrl}</p>
              </section>
            }
            {studentDetails.history &&
              <section>
                <h3>Activity Log</h3>
                {studentDetails.history?.map((history_event, index) => (
                  <div key={index}>
                    <h4>{getReadableTime(history_event.timestamp)}</h4>
                    {history_event.urls.map((url, idx) => <p key={idx}>{url}</p>)}
                  </div>
                ))}
              </section>
            }
          </> :
          <><button onClick={closeDrawer} className={styles.close}>Close</button>
            <p>We couldn&apos;t find more details about this student.</p>
          </>
        }
      </div>}
    </>
  );
}

export default StudentDetailsDrawer;