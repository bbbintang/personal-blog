import Header from "@/Components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="flex justify-center items-center">
      <Image src="/assets/highlight.jpg" alt="" width={300} height={150} />
    </div>
    <div className="flex justify-center items-center font-bold text-lg">
      Sudut Ekspresi
    </div>
    <div className="flex justify-center items-center text-sm">
      Sudut Ekspresi adalah sebuah ruang bagi penulis untuk mengekspresikan dirinya
    </div>
    </>
  );
}
