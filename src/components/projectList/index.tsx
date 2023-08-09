import { For, onMount, createSignal } from "solid-js";
import { FaRegularFileCode } from "solid-icons/fa";
import { AiOutlineArrowRight, AiOutlineLink } from "solid-icons/ai";
import { Loading } from "./Loading";

type DataType = {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
};

const fetchRepos = async () => {
  try {
    const username = "K3ndev";
    const url = `https://api.github.com/users/${username}/repos`;

    const data = await fetch(url);
    const res = await data.json();

    return res;
  } catch (err) {
    console.log(err);
  }
};

export function ProjectList() {
  const [data, setData] = createSignal([]);

  onMount(() => {
    fetchRepos().then((res) => {
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
    });
  });

  return (
    <section class="mb-12">
      {/* card */}
      <For each={data()} fallback={<Loading />}>
        {(item: DataType) => (
          <div class="mb-3 flex min-h-[68px] justify-between gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4">
            <div class="flex w-full gap-3">
              <div class="flex items-center">
                <a href={item.html_url} target="_blank" aria-label={`Github Link to ${item.name}`}>
                  <FaRegularFileCode class="cursor-pointer text-xl hover:fill-cyan-600" />
                </a>
              </div>
              <div>
                <a
                  class={`text-base text-white hover:cursor-pointer hover:text-cyan-600 hover:underline md:text-lg`}
                  href={item.html_url}
                  target="_blank"
                >
                  {item.name}
                </a>
                <p class="text-sm text-slate-400 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
            <div class="flex items-start pt-2">
              {item.homepage !== "" ? (
                <a href={item.homepage} target="_blank" aria-label={`Website Link to ${item.name}`}>
                  <AiOutlineLink class="cursor-pointer text-xl hover:fill-cyan-600" />
                </a>
              ) : (
                <p>
                  <AiOutlineLink class="inline cursor-pointer text-xl hover:cursor-not-allowed" />
                </p>
              )}
            </div>
          </div>
        )}
      </For>
      <div class="flex items-center gap-1">
        <a
        class="inline text-slate-400 transition duration-300 ease-out hover:text-cyan-600 hover:underline"
        href="https://github.com/K3ndev?tab=repositories"
        target="_blank"
      >
        View all Projects <AiOutlineArrowRight class="inline"/>
      </a>
      </div>
    </section>
  );
}
