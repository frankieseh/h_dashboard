export type Status = "online" | "offline";

export type Student = {
  id: string;
  name: string;
  status: Status;
}

// GET: http://localhost:3000/students
export type StudentsResponse = Array<Student>;

// GET: http://localhost:3000/students/:id
export type StudentDetailResponse = {
  id: string;
  name: string;
  currentUrl: string | null;
  currentScreen: string | null;
  history: Array<{
    timestamp: string;
    urls: string[];
  }>;
};

export type StudentsData = StudentsResponse | null;
export type StudentDetailsData = StudentDetailResponse | null;
