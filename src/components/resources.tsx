import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean;
}

interface Favorites {
  [key: string]: boolean;
}

const initialFavorites: Favorites = {};

export function Resources() {
  const [favorites, setFavorites] = useState<Favorites>(initialFavorites);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorite-states');
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      console.log("Loaded favorites:", parsedFavorites); // Debugging log
      setFavorites(parsedFavorites);
    }
  }, []);

  useEffect(() => {
    console.log("Saving favorites:", favorites); // Debugging log
    localStorage.setItem('favorite-states', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (key: string) => {
    const newFavorites = {
      ...favorites,
      [key]: !favorites[key]
    };
    setFavorites(newFavorites);
  };

  const cards = [
    { title: "#YouTubeVideo", description: "https://www.youtube.com/embed/-QDjx_spkwI", type: "video" }, // YouTube video example
    { title: "#anxiety", description: "Discover practical tips and strategies for using social media in a more mindful and intentional way.",  type: "text"  },
    { title: "#egrclass6", description: "Learn about how EGR class 6's idea of simple checklists can be applied to social media companies.",  type: "text"  },
    { title: "#MentalHealthMatters", description: "Understand the impact of social media on mental health and strategies for maintaining well-being.",  type: "text"  },
    { title: "#egrclass14", description: "See how class 14's idea of sical status and material positions applies in social media platforms.",  type: "text"  },
    { title: "#YouTubeVideo", description: "https://www.youtube.com/embed/z5Q5Sz8wh8M", type: "video" }, // YouTube video example
    { title: "#digitaldetox", description: "Learn effective ways to take breaks from digital devices and reconnect with the present moment.",  type: "text"  },
    { title: "#YouTubeVideo", description: "https://www.youtube.com/embed/OavioNSzjUM", type: "video" }, // YouTube video example
    { title: "#egrclass20", description: "See how a single post by a user, as explained by Gillespie, can have unprecendted impacts and Bakken's study.",  type: "text"  },
    { title: "#YouTubeVideo", description: "https://www.youtube.com/embed/5wQx3AteHjw", type: "video" }, // YouTube video example
    { title: "#narayanan", description: "See what Prof. Narayanan had to say on his paper, Understanding Social Media Recommendation Algorithms (class 23-24 reading).",  type: "text"  },
    { title: "#egrclass3", description: "Understand the ideas of social construction in social media, and how the people affect the builder.",  type: "text"  },



  ];

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
      <main className="flex-1 bg-gray-100 dark:bg-gray-900 dark:text-white fade-in-element">
        <section className="py-12 md:py-16 lg:py-20 fade-in-element">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">Mindful Social Resources</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cards.map(card => (
                <Card key={card.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md fade-in-element">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {card.type === 'text' ? (
                      <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                    ) : (
                      <iframe width="100%" height="100%" src={card.description} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    )}
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      {card.type === 'text' ? (
                        <Link href={`/${card.title.slice(1)}`} passHref>
                          <Button size="sm" variant="link">Read More</Button>
                        </Link>
                      ) : (
                        <a href={card.description}  rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">
                          Watch on YouTube
                        </a>
                      )}
                      <Button className="text-gray-500 dark:text-gray-400" size="icon" variant="ghost" onClick={() => toggleFavorite(card.title)}>
                        <HeartIcon filled={favorites[card.title]} className="w-6 h-6" />
                        <span className="sr-only">Favorite</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
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


function HeartIcon({ filled, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? "darkred" : "none"}  // Adjust fill based on 'filled' state
      stroke={filled ? "darkred" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
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
