import React, { useState, useEffect } from 'react';
import Link from "next/link"
interface IconProps extends React.SVGProps<SVGSVGElement> { }
import Image from 'next/image';

export function Homepage() {

  useEffect(() => {
    // Check if animations have already been played
    const animationsPlayed = localStorage.getItem('animationsPlayed');

    if (!animationsPlayed) {
      // If animations haven't been played, add the 'fade-in-element' class to elements
      const elements = document.querySelectorAll('.might-fade');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('fade-in-element');
        }, index * 100); // Increase delay for each element
      });
      // Set flag in local storage
      localStorage.setItem('animationsPlayed', 'true');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-6 px-3 md:py-4 md:px-12">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="mb-4 md:mb-0">
          <Link href="/" className="flex justify-center md:justify-start space-x-4">
              <BrainIcon className="h-6 w-6 md:h-8 md:w-8 fade-in-element" />
              <h1 className="text-xl md:text-2xl font-bold fade-in-element">Mindful Social</h1>
            </Link>
          </div>
          <nav className="flex justify-center md:justify-between md:items-center md:flex-row space-x-4">
            <Link className="hover:underline fade-in-element text-sm md:text-base" href="/assessments">Self-Assessment</Link>
            <Link className="hover:underline fade-in-element text-sm md:text-base" href="/resources">Resources</Link>
            <Link className="hover:underline fade-in-element text-sm md:text-base" href="https://ak34512.wixsite.com/mindful-social-1">Community</Link>
            <Link className="hover:underline fade-in-element text-sm md:text-base" href="https://www.teladochealth.com/expert-care/mental-health">Experts</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-100 dark:bg-gray-900 dark:text-white ">
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 fade-in-element">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Reclaim Your Mindful Presence</h2>
              <p className="text-gray-700 dark:text-gray-400">
                {'Discover how social media impacts your mental health and learn strategies to maintain a healthy balance.'}
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
                src="/mindful.png"
                style={{
                  objectFit: "cover",
                }}
                width={300}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 fade-in-element">
            <div>
              <Image
                alt="Self-Assessment"
                className="rounded-lg"
                height={400}
                src="/upraise.png"
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
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 fade-in-element">
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
                className="rounded-lg"
                height={400}
                src="/family.png"
                style={{

                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 fade-in-element">
            <div>
              <Image
                alt="Community"
                className="rounded-lg"
                height={400}
                src="/hero.png"
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
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-12 fade-in-element">
      <div className="flex items-center justify-between">
        <p className="text-sm">Mindful Social</p>
        <nav className="hidden md:flex items-center space-x-6">
          <div>
            Built 100% from scratch with Next.js and Tailwind CSS, deployed with Vercel, and coded in Visual Studio Code.
          </div>
          <Link legacyBehavior href="https://github.com/aarush-kukreja/egr277project" passHref>
            <a className="hover:underline fade-in-element">
              <GithubIcon className="w-6 h-6" />
            </a>
          </Link>
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


function GithubIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.85-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.578 9.578 0 0112 6.8c.85 0 1.7.11 2.5.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.58.69.48A10.025 10.025 0 0022 12c0-5.52-4.48-10-10-10z"/>
    </svg>
  );
}
