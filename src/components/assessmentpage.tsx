import { useState } from 'react';
import Link from 'next/link';
interface IconProps extends React.SVGProps<SVGSVGElement> { }


export function AssessmentPage() {
  const questions = [
    { text: "How often do you check or use social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
    { text: "How do you generally feel after using social media?", range: { min: 1, max: 5, step: 1 }, label: "great to terrible" },
    { text: "How often do you experience FOMO when not using social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
    { text: "How often do you compare yourself to others on social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
    { text: "How often do you feel overwhelmed by the amount of information and content on social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
  ];

  const [answers, setAnswers] = useState<number[]>(questions.map(() => 1));
  const [summary, setSummary] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const generateSuggestion = () => {

    const [usage, feeling, fomo, comparison, overwhelmed] = answers;
    let localSummary: string[] = [];
    let localSuggestions: string[] = [];
    let sentiments: string[] = [];

    if (feeling >= 4) {
      localSummary.push("Using social media tends to leave you feeling negatively.");
      localSuggestions.push("Getting in touch with support groups.");
      sentiments.push('negative');
    } else if (feeling <= 2) {
      localSummary.push("It's good that you generally feel positive after using social media.");
      sentiments.push('positive');
    }

    if (usage >= 4) {
      localSummary.push("You seem to check or use social media frequently.");
      sentiments.push('negative');
      localSuggestions.push("Consider taking social media detoxes.");
    }

    if (fomo >= 4) {
      localSummary.push("You experience \"fear of missing out\" quite often when not using social media.");
      sentiments.push('negative');
      localSuggestions.push("Try to take a hiatus from time to time--learn what it's like to be out of the loop!");
    }

    if (comparison >= 4) {
      localSummary.push("You frequently compare yourself to others on social media.");
      sentiments.push('negative');
      localSuggestions.push("Take influencers you look up to as inspiration.");
    }

    if (overwhelmed >= 4) {
      localSummary.push("You often feel overwhelmed by the amount of information.");
      sentiments.push('negative');
      localSuggestions.push("Try to take time off from social media.");
    }

    // Combining summaries and adding transitions based on sentiment changes.
    const finalSummary = generateFinalSummary(localSummary, sentiments);
    setSummary(finalSummary.join(' '));
    // Ensure suggestions are added if any are present.
    setSuggestions(localSuggestions.length > 0 ? localSuggestions : ["Keep doing what you're doing! Your social media use is normal."]);
  };


  function generateFinalSummary(summary: string[], sentiments: string[]): string[] {
    let finalSummary: string[] = summary.length > 0 ? [summary[0]] : [];

    for (let i = 1; i < summary.length; i++) {
      if (sentiments[i] !== sentiments[i - 1]) {
        finalSummary.push(` However, ${summary[i].toLowerCase()}`);
      } else {
        finalSummary.push(` ${summary[i]}`);
      }
    }

    return finalSummary;
  }

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
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">



            <h2 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">Social Media Impact Assessment</h2>

            <div className="max-w-3xl mx-auto">
              <form onSubmit={(e) => {
                e.preventDefault();
                generateSuggestion();
              }}>
                {questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <label className="block mb-2">
                      {question.text} ({question.range.min}: {question.label.split(' ')[0]}, {question.range.max}: {question.label.split(' ')[2]})
                    </label>
                    <input
                      type="range"
                      min={question.range.min}
                      max={question.range.max}
                      step={question.range.step}
                      value={answers[index]}
                      onChange={(e) => handleChange(index, parseInt(e.target.value))}
                      className="w-full appearance-none bg-transparent transition-colors duration-300 hover:bg-black rounded-full h-4 cursor-pointer" style={{
                        background: `linear-gradient(90deg, #1F2937 ${((answers[index] - question.range.min) / (question.range.max - question.range.min)) * 100}%, #1a2029 ${((answers[index] - question.range.min) / (question.range.max - question.range.min)) * 100}%)`
                      }}
                    />

                    <div className="text-center">{answers[index]}</div>
                  </div>
                ))}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-slate-700 text-white px-4 py-2 rounded transition-colors duration-150 hover:bg-slate-800 hover:scale-95 active:scale-90"                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {summary && (
              <div className="mt-4 max-w-3xl mx-auto">
                <h2 className="font-bold">Summary:</h2> <p>{summary}</p>
                <br />
                <h2 className="font-bold">Suggestions:</h2> <ul>
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
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
  );
}


export function BrainIcon(props: IconProps) {
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
  );
}

export function MenuIcon(props: IconProps) {
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
  );
}
