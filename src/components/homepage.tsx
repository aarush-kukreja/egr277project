import Link from "next/link"
interface IconProps extends React.SVGProps<SVGSVGElement> { }
import Image from 'next/image';

export function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12">
        <header className="bg-gray-900 text-white py-4 px-6 md:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <BrainIcon className="h-8 w-8" />
                <h1 className="text-2xl font-bold">Mindful Social</h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link className="hover:underline" href="/assessments">
                Self-Assessment
              </Link>
              <Link className="hover:underline" href="/resources">
                Resources
              </Link>
              <Link className="hover:underline" href="https://ak34512.wixsite.com/mindful-social-1">
                Community
              </Link>
              <Link className="hover:underline" href="https://www.teladochealth.com/expert-care/mental-health">
                Experts
              </Link>
            </nav>
            <button className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </header>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Reclaim Your Mindful Presence</h2>
              <p className="text-gray-700 dark:text-gray-400">
                Discover how social media impacts your mental health and learn strategies to maintain a healthy balance.
              </p>
              <Link
                className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md"
                href="/assessments"
              >
                Take the Assessment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <Image
                alt="Mindful Social"
                height={700}
                src="https://www.austinfitmagazine.com/wp-content/uploads/2022/04/Building-mindfulness-graphic.png"
                style={{
                  objectFit: "cover",
                }}
                width={300}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <Image
                alt="Self-Assessment"
                className="rounded-lg shadow-lg"
                height={400}
                src="https://upraise.io/wp-content/uploads/2022/12/10-Functions-of-Human-Resource-Management-banner2.webp"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Explore Helpful Resources</h2>
              <p className="text-gray-400">
                Access a curated collection of  articles to help you develop a healthier relationship with social media.
              </p>
              <Link
                className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md"
                href="/resources"
              >
                View Resources
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Connect with Our Community</h2>
              <p className="text-gray-700 dark:text-gray-400">
                Join our supportive community forum to share experiences, seek advice, and connect with others on a
                similar journey.
              </p>
              <Link
                className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md"
                href="https://ak34512.wixsite.com/mindful-social-1"
              >
                Visit the Community
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <Image
                alt="Resources"
                className="rounded-lg shadow-lg"
                height={400}
                src="https://crowdforthink.com/assets/uploads/blogs/bd9f4bd26603f2c411a29ae428c823db.png"
                style={{

                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <Image
                alt="Community"
                className="rounded-lg shadow-lg"
                height={400}
                src="https://d1pfint8izqszg.cloudfront.net/web7/images/experts-hero.png"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Guidance from Experts</h2>
              <p className="text-gray-400">
                Consult with mental health professionals who can provide personalized advice and support to help you
                maintain a healthy social media balance.
              </p>
              <Link
                className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md"
                href="https://www.teladochealth.com/expert-care/mental-health"
              >
                Talk to Experts
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-12">
        <div className="flex items-center justify-between">
          <p className="text-sm">© 2024 Mindful Social. All rights reserved.</p>
          <nav className="hidden md:flex items-center space-x-6">
            <div>
              Built 100% from scratch with Next.js and Tailwind CSS, deployed with Vercel, and coded in Visual Studio Code.
            </div>
          </nav>
        </div>
      </footer>

    </div>
  )
}

function ArrowRightIcon(props: IconProps) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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
