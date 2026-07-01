import { Person, WithContext } from "schema-dts"; // app/lib/personSchema.ts
export const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Araf Khatri",
  jobTitle: "Full-Stack Software Development Engineer",
  url: "https://araf-khatri-portfolio.netlify.app/",
  image: "https://araf-khatri-portfolio.netlify.app/apple-favicon.png",
  sameAs: [
    "https://github.com/Araf-Khatri",
    "https://www.linkedin.com/in/araf-khatri-9819851b4",
    "https://leetcode.com/Araf_k",
    "https://www.hackerrank.com/profile/akplayz01",
  ],
  knowsAbout: [
    "React",
    "Nextjs",
    "Node.js",
    "Python",
    "Full Stack Development",
    "AWS",
    "RDBMS",
    "PostgreSQL",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mumbai University",
  },
};
