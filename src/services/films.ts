import axios from "axios";

export const getFilms = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/films`);
  return data;
};

export const getFilm = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/films/${id}`
  );
  return data;
};
