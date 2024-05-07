import Link from "next/link"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
interface IconProps extends React.SVGProps<SVGSVGElement> { }


export function EGRclass3() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="w-2/3 p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold">#egrclass3</h1>
                    </div>
                    <div className="mb-8">
                        <p className="text-gray-600 dark:text-gray-400">
                            Creators do not solely dictate the development of social media platforms. As discussed in EGR class 3, the concept of social construction suggests that users play a significant role in shaping these platforms through interactions. While developers design the initial features, the users define how these platforms are used and what they become. For example, algorithms used by platforms like Facebook to disseminate news reflect the significant control they exert over information distribution, which is shaped by user interactions and feedback (Presuel & Martínez Sierra, 2019). Furthermore, changes in platform design, such as introducing new features, can significantly alter user behavior, which feeds back into further platform adjustments (Malik & Pfeffer, 2016). In short, social media platforms are living ecosystems that adapt—and the dialogue between users and platforms drives the construction and reconstruction of social media spaces.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 bg-gray-300 dark:bg-gray-700 p-4 flex flex-col items-center justify-between">
                    <img src="https://www.thoughtco.com/thmb/Bmee_2gR1a26jji_xObV9KZfp1U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SocialConstructionism-5c53d71f46e0fb00013a1fc0.jpg" alt="Descriptive Image" className="w-full h-full object-cover rounded-lg" style={{ marginBottom: '1rem' }} />
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


    )
}

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
