"use client";

import { getReservations } from "@/services/reservation";
import {
  Button,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

import type { ReservationType } from "@/types";

const columns = [
  {
    key: "service",
    label: "문의 상품",
  },
  {
    key: "name",
    label: "성함",
  },
];

const ReservationPage = () => {
  const router = useRouter();

  const {
    data: reservations,
    isLoading,
    isError,
  } = useQuery<ReservationType[]>({
    queryKey: ["reservations"],
    queryFn: getReservations,
  });

  const handleNewReservationClick = () => {
    router.push("/reservation/new");
  };

  if (isLoading) {
    return <div>로딩중입니다...!</div>;
  }

  if (isError) {
    return <div>오류가 발생하였습니다...!</div>;
  }

  return (
    <div className="w-full mx-[60px]">
      <section className="flex justify-end">
        <Button
          onClick={handleNewReservationClick}
          radius="none"
          variant="solid"
          className="px-5 bg-[#8f7bb5] text-white px-10 py-5"
        >
          예약하기
        </Button>
      </section>
      <Spacer y={5} />
      <section>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn className="text-center" key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={reservations}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default ReservationPage;
