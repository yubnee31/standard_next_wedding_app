import { Spacer } from "@nextui-org/react";
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <p>
        두 사람이 하나가 되는 짧은 시간, 그 순간 반짝이는 모든 감정들을 잘
        담아낼 수 있도록 고민하고 또 고민했습니다.
      </p>
      <p>
        &apos;작은 사랑의 노래&apos;라는 뜻인 &apos;소네트&apos;의 의미에
        걸맞도록 두 사람이 주인공인 한 편의 사랑 노래를 만들고 싶었습니다.
      </p>
      <Spacer y={10} />
      <p>
        여러분이 보여주시는 사랑이라는 벅찬 감정은 제가 삶을 살아가고 사랑을
        실천해나가는 원동력이 됩니다.
      </p>
      <p>
        그래서 촬영을 마치고 집에 돌아오면 몸은 힘들어도 평소보다 아내에게
        사랑한다는 말을 더 많이 하게 됩니다.
      </p>
      <p>
        또 어떤 때는 1년 전 우리가 두 손을 맞잡고 했던 약속들을 잘 지키고 있는지
        돌아봅니다.
      </p>
      <Spacer y={10} />
      <p>
        사랑을 귀하게 여길 줄 아는 사람만이 다른 사람의 사랑을 잘 담을 수 있다고
        믿습니다.
      </p>
      <p>
        앞으로 저 그리고 &apos;소네트필름&apos;이 만들어 나갈 사랑의 노래들을
        애정 어린 마음으로 지켜봐주시기 바랍니다.
      </p>
      <Spacer y={10} />
      <p>사랑을 담아,</p>
      <p>소네트 올림.</p>
      <Spacer y={10} />
      <iframe
        width="544"
        height="306"
        src="https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=A8C1B29F1FBA00C359483E18CECAAE499F65&outKey=V128f77593b0a97d146941cdf56290f198d5318e6f95d02da99ef1cdf56290f198d53"
        title="NaverVideo"
        allow="autoplay; gyroscope; accelerometer; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default AboutPage;
