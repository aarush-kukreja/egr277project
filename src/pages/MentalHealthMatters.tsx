import Image from "next/image";
import { Inter } from "next/font/google";
import { MentalHealth } from "@/components/mentalhealthmatters";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div >
  < MentalHealth />
</div>
    
  );
}
