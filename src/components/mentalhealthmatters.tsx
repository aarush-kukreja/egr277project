import Link from "next/link"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
interface IconProps extends React.SVGProps<SVGSVGElement> { }
import Image from 'next/image';


export function MentalHealth() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="w-2/3 p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold">#MentalHealthMatters</h1>
                    </div>
                    <div className="mb-8">
                        <p className="text-gray-600 dark:text-gray-400">
                        {'Social media programs need not be just to disseminate negativity when it comes to mental state. #MentalHealthMatters was a broad trend on socilal media, having over 13M posts on instagram alone (https://www.instagram.com/explore/tags/mentalhealthmatters/?hl=en). Having communities within social media remains a helpful technique to deal with mental health issues. MentalHealthMatters also, as of Tuesday May 7th, has over 11M posts on TikTok (https://www.tiktok.com/tag/mentalhealthmatters?lang=en), the millions of posts being countless stories of people surmounting their mental health issues or heartwarming videos that show support. Some videos show people discussing how they felt after losing their loved ones, other videos show strangers holding “Free Hugs” signs and having individuals approach them for a hug. Other videos advocate for mental health support systems like therapy. All of these (and many more) are available on the links provided—feel free to check them out!'}

                        </p>
                    </div>
                </div>
                <div className="w-1/3 bg-gray-300 dark:bg-gray-700 p-4 flex flex-col items-center justify-between">
                    <Image src="https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/e3e70661f81a706b276222a75ee34847.jpeg" alt="Descriptive Image" className="w-full h-full object-cover rounded-lg" style={{ marginBottom: '1rem' }} />
                    <Link
                        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                        href="/resources"
                    >
                        <ArrowLeftIcon className="mr-2 h-4 w-4" />
                        Back
                    </Link>
                </div>
            </div>
        </div>
)}

function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function BrainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  )
}


function HeartIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
