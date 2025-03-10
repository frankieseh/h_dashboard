// GET: http://localhost:3000/students
export type StudentsResponse = Array<{
  id: string;
  name: string;
  status: "online" | "offline";
}>;

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
