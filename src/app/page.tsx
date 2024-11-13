import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/gonet.png"
        alt="Home Image"
        layout="fill"
        objectFit="cover"
      />
      ;
    </div>
  );
}
