import { useState } from 'react';
import Link from 'next/link';
interface IconProps extends React.SVGProps<SVGSVGElement> { }


export function AssessmentPage() {
  const questions = [
    { text: "How often do you check or use social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
    { text: "How often do you feel bad after using social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
    { text: "How often do you experience FOMO when not using social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
    { text: "How often do you compare yourself to others on social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
    { text: "How often do you feel overwhelmed by the amount of content on social media?", range: { min: 1, max: 5, step: 1 }, label: "never to always" },
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
    } else if (feeling <= 3) {
      localSummary.push("It is good that you generally feel positive or neutral after using social media.");
      sentiments.push('positive');
    }

    if (usage >= 4) {
      localSummary.push("You seem to check or use social media frequently.");
      sentiments.push('negative');
      localSuggestions.push("Consider taking social media detoxes.");
    }

    if (fomo >= 4) {
      localSummary.push("You experience a fear of missing out quite often when not using social media.");
      sentiments.push('negative');
      localSuggestions.push("Try to take a hiatus from time to time--learn what it is like to be out of the loop!");
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
    setSuggestions(localSuggestions.length > 0 ? localSuggestions : ["Keep doing what you are doing! Your social media use is fine."]);
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
      <main className="flex-1 bg-gray-100 dark:bg-gray-900 dark:text-white fade-in-element">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">



            <h2 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">Social Media Impact Assessment</h2>

            <div className="max-w-3xl mx-auto">
              <form onSubmit={(e) => {
                e.preventDefault();
                generateSuggestion();
              }}>
                {questions.map((question, index) => (
                  <div key={index} className="mb-4 fade-in-element">
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
                <div className="flex justify-center fade-in-element">
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
