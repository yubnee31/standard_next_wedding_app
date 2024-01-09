import axios from "axios";

export const getReservations = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/reservation`
  );
  return data;
};

export const getReservation = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/reservation/${id}`
  );
  return data;
};

export const createReservation = async (data: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/reservation`,
    data
  );
  return response;
};
