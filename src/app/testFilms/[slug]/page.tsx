import React from "react";
import Image from "next/image";
import { Spacer } from "@nextui-org/react";

import type { FilmType } from "@/types";
import Link from "next/link";

type Props = { params: { slug: string } };

const TestFilmsDetailPage = async ({ params }: Props) => {
  const { slug: id } = params;

  //TODO: id를 기반으로 데이터베이스에서 film 정보 하나를 읽어오기
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/films/${id}`
  );
  const film: FilmType = await response.json();

  //TODO: 읽어온 데이터를 기반으로 UI구성하기
  return (
    <div className="flex flex-col items-center w-full">
      <Link
        href="/testFilms"
        className="bg-[#8f7bb5] text-white px-10 py-3 mx-10 self-end"
      >
        목록으로
      </Link>
      <p>FILMS detail page</p>
      <div>필름이름 : {film.name}</div>
      <div>카테고리 : {film.category}</div>
      <Spacer y={10} />
      <div className="relative w-[500px] h-[300px]">
        <Image src={film.imageUrl} alt={film.name} fill />
      </div>
    </div>
  );
};

export default TestFilmsDetailPage;

export async function generateStaticParams() {
  // 가능한 모든 films 정보를 기반으로 detail 페이지 4개를 미리 만들어 줌
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/films`);
  const films: FilmType[] = await response.json();

  return films.map((film) => ({
    slug: String(film.id),
  }));
}
