export type ReservationType = {
  id?: number;
  email: string;
  name: string;
  password: string;
  passwordAgain: string;
  location: string;
  phone: string;
  time: string;
  date: string;
  service: string;
  isDeleted: boolean;
};

export type FilmType = {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  isDeleted: boolean;
};
