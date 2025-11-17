import React from "react";
const BlogsData = [
  {
    id: 1,
    title:
      "The Employability Crisis: Why 90% of Indian Engineers Aren't Job-Ready",
    description:
      "A detailed look at the systemic disconnect between outdated college curricula and modern industry demands, and the practical solutions needed to fix it.",
    image: img1,
  },
  {
    id: 2,
    title: "The 3-Month Shortcut: From Graduate to Job-Ready Engineer",
    description:
      "Explore a structured 3-month bootcamp model that integrates technical tools, professional development, and a guaranteed internship to bridge the gap.",
    image: img6,
  },
  {
    id: 3,
    title: "The New Diploma: Why Internships Are the Real Degree in 2025",
    description:
      "Employers now ask 'What projects have you worked on?' Learn why practical internship experience is the new standard for employability.",
    image: img3,
  },
  {
    id: 4,
    title: "Theory vs. Survival: Why Your College Degree Isn't Enough",
    description:
      "A harsh look at why college prepares you for exams, not for survival. Discover the practical, hands-on skills that employers *actually* demand.",
    image: img4,
  },
  {
    id: 5,
    title: "What to Learn in 2025: A Guide to In-Demand Skills",
    description:
      "A data-driven look at the most in-demand technical skills for Civil, Mechanical, and IT (like Revit, Python, and AWS) and the soft skills that multiply your hiring chances.",
    image: img5,
  },
  {
    id: 6,
    title: "The 3-Step Formula for Choosing the Right Skills",
    description:
      "Stop learning random skills. Learn 'skill layering' and follow our 3-step formula (Market Demand, Longevity, ROI) to build a valuable career stack.",
    image: img6,
  },
  {
    id: 7,
    title: "The Graduate Trap: Why 52% of Indian Students Aren't Employable",
    description:
      "The India Skills Report 2025 reveals a harsh truth. Learn why the education system produces 'examinees' instead of 'employees' and what to do about it.",
    image: img7,
  },
  {
    id: 8,
    title: "Hyderabad's Silent Revolution: Becoming India’s Skill Capital",
    description:
      "Discover why Hyderabad is emerging as India's new hub for practical education, driven by 400+ EdTech startups and a government focus on job-ready training.",
    image: img8,
  },
  {
    id: 9,
    title: "The 90-Day Model: Why Short Bootcamps Are Replacing Degrees",
    description:
      "Is a 4-year degree still worth it? We compare the cost, speed, and ROI of traditional education versus the 90-day bootcamp model that employers now prefer.",
    image: img9,
  },
  {
    id: 10,
    title: "The 90-Day Blueprint: From Zero to Job-Ready",
    description:
      "A step-by-step look at the Cheatcamp success blueprint: Month 1 (Core Tools), Month 2 (Soft Skills), and Month 3 (Guaranteed Internship & Portfolio).",
    image: img10,
  },
];
import img1 from "../assets/images/nojob.jpeg";
import img3 from "../assets/images/Internship.jpeg";
import img4 from "../assets/images/indemand.jpeg";
import img5 from "../assets/images/degree.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";
import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.jpeg";
import img10 from "../assets/images/img10.jpeg";

const BlogsPage = () => {
  return (
    <div className="container mt-10 mx-auto px-4">
      <h1 className="font-primary text-primary mb-6 text-5xl text-center">
        BLOGS
      </h1>

      <div className="p-3 grid gap-8 md:grid-cols-3">
        {BlogsData.map((data) => (
          <div
            key={data.id}
            className="relative z-10 w-full max-w-[360px] h-[420px] p-4
                       border border-black rounded-sm shadow-sm
                       hover:shadow-lg hover:border-primary hover:-translate-y-2 transition-transform duration-300
                       overflow-hidden flex flex-col"
          >
            <div className="w-full h-45 overflow-hidden rounded-sm shrink-0">
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="mt-3 flex-1 flex flex-col">
              <h1 className="font-primary text-primary font-bold text-base md:text-lg">
                {data.title}
              </h1>

              <p className="font-teritiary mt-2 line-clamp-3 text-sm text-justify">
                {data.description}
              </p>

              <div className="mt-4">
                <button className="bg-primary font-primary hover:scale-105 transition duration-300 text-white font-bold px-4 py-2 rounded-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
