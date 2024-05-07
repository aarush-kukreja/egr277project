import Image from "next/image";
import { Inter } from "next/font/google";
import { AnxietyPage } from "@/components/anxietypage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div >
  < AnxietyPage />
</div>
    
  );
}
