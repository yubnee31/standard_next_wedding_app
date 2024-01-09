import React from "react";
import { Spacer } from "@nextui-org/react";

function Footer() {
  return (
    <div className="flex flex-col items-center">
      <Spacer y={10} />
      <p>BUSINESS NO. 999-99-99999 | TEL 010-1111-2222</p>
      <Spacer y={10} />
      <p className="text-xs">COPYRIGHT© SONNETFILM ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
