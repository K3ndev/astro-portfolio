type projectType = {
  projNum: number;
  projName: string;
  projDesc: string;
  projTech: string[];
  projUrl: string;
};

type dataProjType = Array<projectType>;

export const dataProj: dataProjType = [
  {
    projNum: 1,
    projName: "Portfolio",
    projDesc: "Build with Astro.js with Solid.js",
    projTech: ["Typescript", "Tailwind"],
    projUrl: "https://github.com/K3ndev/Portfolio-v2",
  },
  {
    projNum: 2,
    projName: "Solid-todo-signal",
    projDesc: "Build with Solid.js",
    projTech: ["Typescript", "Tailwind"],
    projUrl: "https://solid-todo-signal.vercel.app",
  },
  {
    projNum: 3,
    projName: "React-todo-zustand",
    projDesc: "Build with React.js",
    projTech: ["Typescript", "Tailwind"],
    projUrl: "https://react-todo-zustand.vercel.app/",
  },
  {
    projNum: 4,
    projName: "React-todo-redux",
    projDesc: "Build with React.js",
    projTech: ["Typescript", "Tailwind"],
    projUrl: "",
  },
  {
    projNum: 5,
    projName: "Next-Pokemon",
    projDesc: "Build with Next.js",
    projTech: ["Typescript", "Tailwind"],
    projUrl: "",
  },
  {
    projNum: 6,
    projName: "SolidStart-Pokemon",
    projDesc: "Build with solidStart.js",
    projTech: ["Typescript", "Tailwind"],
    projUrl: "",
  },
];
