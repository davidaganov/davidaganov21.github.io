import { v4 as uuidv4 } from "uuid"

export default {
  about: [
    "I started getting interested in web development back in 2016, when I watched a lot of YouTube videos about development, looked for free courses on the Internet and tried to create my own sites.",
    "Years later and after completing my studies, I was lucky to connect my life with my hobby and get a job as a junior frontend developer in a company developing mobile games and individual projects.",
    "During the year and a half spent in this company, I learned a lot. My main activity was development of products with <strong>Nuxt.js</strong> framework and creation of many landing pages.",
    "The company also gave me the opportunity to take courses on <strong>React</strong> and <strong>React Native</strong> development."
  ],

  skills: [
    {
      id: uuidv4(),
      title: "HTML",
      list: [
        { id: uuidv4(), title: "Template Engine", tag: ["PUG"] },
        { id: uuidv4(), title: "Native", tag: ["HTML5"] }
      ]
    },
    {
      id: uuidv4(),
      title: "CSS",
      list: [
        { id: uuidv4(), title: "Preprocessors", tag: ["SASS/SCSS", "Less"] },
        { id: uuidv4(), title: "Frameworks", tag: ["Bootstrap", "Tailwind"] },
        { id: uuidv4(), title: "Native", tag: ["CSS3"] }
      ]
    },
    {
      id: uuidv4(),
      title: "JavaScript",
      list: [
        { id: uuidv4(), title: "Frameworks", tag: ["Nuxt.js", "Vue.js", "Next.js"] },
        { id: uuidv4(), title: "Library", tag: ["React", "React Native", "JQuery"] },
        { id: uuidv4(), title: "Native", tag: ["JavaScript", "TypeScript"] }
      ]
    },
    {
      id: uuidv4(),
      title: "Other",
      list: [
        { id: uuidv4(), title: "CMS", tag: ["Wordpress"] },
        { id: uuidv4(), title: "Design", tag: ["Figma", "Adobe Photoshop"] },
        { id: uuidv4(), title: "3D", tag: ["Blender", "Maya"] },
        { id: uuidv4(), title: "OS", tag: ["Windows", "Mac OS"] }
      ]
    }
  ]
}
