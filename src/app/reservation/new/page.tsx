"use client";

import { Button, Input, Spacer } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { SERVICES } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

import type { ReservationType } from "@/types";

const NewReservationPage = () => {
  const router = useRouter();

  /** FORM에 필요한 state 정의 */
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordAgain, setPasswordAgain] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();
  const [service, setService] = useState<Selection>(new Set([]));

  /** mutation은 동일 컴포넌트에서 여러개 쓰일 수 있으므로 이름 명시하기 */
  const { mutate: newReservationMutate } = useMutation({
    mutationFn: async (newReservationObj: ReservationType) => {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/reservation`,
        newReservationObj
      );
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [inputService] = Array.from(service);

    /** 필수 입력 값 검증 */
    if (
      !email ||
      !name ||
      !password ||
      !passwordAgain ||
      !location ||
      !phone ||
      !time ||
      !date ||
      !inputService
    ) {
      alert("필수 입력값을 입력해주세요.");
      return;
    }

    /** 비밀번호 검증 */
    if (password !== passwordAgain) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    /** 데이터 전달 object 생성 */
    const newReservationObj = {
      email,
      name,
      password,
      passwordAgain,
      location,
      phone,
      time,
      date,
      service: inputService.toString(),
      isDeleted: false,
    };

    /** mutation 실행 */
    newReservationMutate(newReservationObj, {
      onSuccess: () => {
        alert("예약이 완료되었습니다.");
        router.back();
      },
      onError: () => {
        alert("예약에 실패하였습니다.");
      },
    });
  };

  return (
    <div className="w-full flex flex-col items-center mx-[60px]">
      <p className="bg-[#f5f3f4] w-full text-center h-[64px] py-[10px] flex justify-center items-center [&>span]:text-2xl [&>span]:font-semibold">
        <span className="text-[#8f7bb5]">소네트필름</span>
        <Spacer x={2} />
        <span className="text-[#5f5a5d]">예약하기</span>
      </p>
      <Spacer y={5} />
      <Image
        src="/images/reservation-step.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="reservation-step"
      />
      <Spacer y={10} />
      <form onSubmit={onSubmit} className="flex flex-col gap-[25px] w-full">
        <Select
          label="SERVICE"
          selectedKeys={service}
          className="w-full"
          onSelectionChange={setService}
          placeholder="문의상품"
          variant="underlined"
        >
          {SERVICES.filter((s) => s.isActive).map((service) => (
            <SelectItem key={service.code} value={service.code}>
              {service.name}
            </SelectItem>
          ))}
        </Select>
        <Input
          isClearable
          onClear={() => {
            setName("");
          }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          label="NAME"
          placeholder="이름을 입력해주세요"
          variant="underlined"
        />
        <Input
          isClearable
          onClear={() => {
            setPassword("");
          }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          label="PASSWORD"
          placeholder="비밀번호 네 자리를 입력해주세요(EX: 1234)"
          variant="underlined"
        />
        <Input
          isClearable
          onClear={() => {
            setPasswordAgain("");
          }}
          value={passwordAgain}
          onChange={(e) => {
            setPasswordAgain(e.target.value);
          }}
          type="password"
          label="PASSWORD AGAIN"
          placeholder="비밀번호 네 자리를 한번 더 입력해주세요(EX: 1234)"
          variant="underlined"
        />
        <Input
          isClearable
          onClear={() => {
            setPhone("");
          }}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          label="PHONE NUMBERS"
          placeholder="전화번호를 입력해주세요"
          variant="underlined"
        />
        <Input
          isClearable
          onClear={() => {
            setEmail("");
          }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          label="EMAIL"
          placeholder="이메일을 입력해주세요"
          variant="underlined"
        />
        <Input
          isClearable
          onClear={() => {
            setLocation("");
          }}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          label="WEDDING LOCATION"
          placeholder="예식장은 어디인가요? (EX: 서울 라마다호텔 신도림)"
          variant="underlined"
        />
        <Input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="date"
          label="WEDDING DATE"
          placeholder="예식 날짜를 선택해주세요."
          variant="underlined"
        />
        <Input
          isClearable
          onClear={() => {
            setTime("");
          }}
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          type="text"
          label="CEREMONY TIME"
          placeholder="예식 시간을 알려주세요(EX: 오후 3시)"
          variant="underlined"
        />
        <Spacer y={10} />
        <Button
          type="submit"
          radius="none"
          className="w-fit bg-[#8f7bb5] text-white px-[50px] self-end"
        >
          예약하기
        </Button>
      </form>
    </div>
  );
};

export default NewReservationPage;
