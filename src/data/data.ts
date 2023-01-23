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
    projTech: ["Astro.js", "Solid.js", "Typescript", "Tailwind"],
    projUrl: "https://github.com/K3ndev/Portfolio-v2",
  },
  {
    projNum: 2,
    projName: "TODO",
    projDesc: "Build with Next.js",
    projTech: ["Next.js", "Typescript", "Tailwind"],
    projUrl: "https://k3n-todo.vercel.app/",
  },
  {
    projNum: 3,
    projName: "SolidStart-Movies",
    projDesc: "Build with SolidStart.js",
    projTech: ["SolidStart.js", "Typescript", "Tailwind"],
    projUrl: "",
  },
  {
    projNum: 4,
    projName: "Next-Movies",
    projDesc: "Build with Next.js",
    projTech: ["Next.js", "Typescript", "Tailwind"],
    projUrl: "",
  },
];
