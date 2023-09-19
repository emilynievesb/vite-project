import { useState } from "react";

export default function Header() {
  const [nombre, setMen] = useState("");
  const send = async () => {
    const response = await await fetch(
      "http://192.168.128.72:5116/user"
    ).json();
    setMen(response);
    console.log(response);
  };
  send();
  return <div>${nombre}n</div>;
}
