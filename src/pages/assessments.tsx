import Image from "next/image";
import { Inter } from "next/font/google";
import { AssessmentPage } from "@/components/assessmentpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div >
  < AssessmentPage />
</div>
    
  );
}