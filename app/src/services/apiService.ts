import { API_URL } from "./constants";

export const getStudents = () => {
  return fetch(`${API_URL}/students`).then((response) =>
    response.json()
  );
};

export const getStudentDetails = async (id: string) => {
  if (!parseInt(id)) {
    throw new Error("id provided was not valid");
  } else return fetch(`${API_URL}/studentDetails/${id}`).then((response) =>
    response.json()
  );
};
