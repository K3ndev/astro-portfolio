import { onMount, createSignal, onCleanup } from "solid-js";

type ReposType = {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
};

export const FetchRepos = () => {

  const [data, setData] = createSignal([]);
  const [isError, setIsError] = createSignal(false);
  const [isLoading, setIsLoading] = createSignal(false);

  const abortController = new AbortController(); 

  const fetchData = async (username: string) => {

    const url = `https://api.github.com/users/${username}/repos`;

    const data = await fetch(url, {
      signal: abortController.signal,
    });

    setIsLoading(true)
    const res = await data.json();

    return res
  }

  onMount(() => {
    fetchData("K3ndev").then((res) => {
      
    const filteredRepos = res.filter((item: ReposType) => item.description.includes('~'));

      const repositories = filteredRepos.map((repo: ReposType) => ({
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

    onCleanup(() => {
      abortController.abort();
    })
  });


  return { data, isError, isLoading }
};
