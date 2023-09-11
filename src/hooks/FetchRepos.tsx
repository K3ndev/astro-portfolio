import { onMount, createSignal } from "solid-js";
import { type DataType } from "./types"

export const FetchRepos = () => {

  const [data, setData] = createSignal([]);
  const [isError, setIsError] = createSignal(false);
  const [isLoading, setIsLoading] = createSignal(false);


  const fetchData = async (username: string) => {
    const url = `https://api.github.com/users/${username}/repos`;

    const data = await fetch(url);

    // throw new Error("test"); 

    setIsLoading(true)
    const res = await data.json();

    return res
  }

  onMount(() => {
    fetchData("K3ndev").then((res) => {
      const keywords = [
        "astro",
        "solid",
        "solidstart",
        "react",
        "next",
        "vue",
        "nuxt",
        "node",
        "express",
        "strapi",
        "template",
        "golang",
        "chi",
        "mux",
        "stellar"
      ];

      const filteredRepos = res.filter((repo: DataType) =>
        keywords.some((keyword) => repo.name.toLowerCase().includes(keyword))
      );
      const repositories = filteredRepos.map((repo: DataType) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
      }));
      setData(repositories);
      setIsLoading(false)
    }).catch((_) => {
      setIsError(true)
      setIsLoading(false)
    })
  });


  return { data, isError, isLoading }
};
