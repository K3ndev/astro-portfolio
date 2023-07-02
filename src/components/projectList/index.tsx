import { For, onMount, createSignal } from "solid-js";
import { FaRegularFileCode } from "solid-icons/fa";
import { AiOutlineArrowRight } from "solid-icons/ai";
import { Loading } from "./Loading";

type DataType = {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
};

const fetchRepos = async () => {
  const username = "K3ndev";
  const url = `https://api.github.com/users/${username}/repos`;

  const data = await fetch(url);
  const res = await data.json();

  return res;
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
        "svelte",
        "sveltekit",
        "express",
        "strapi"
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
          <a
            class="mb-3 flex min-h-[68px] cursor-pointer items-center gap-3 bg-gray-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4"
            href={
              item.homepage === "" || item.name === "astro-portfolio"
                ? item.html_url
                : item.homepage
            }
            target="_blank"
          >
            <div>
              <FaRegularFileCode class="text-xl" />
            </div>
            <div>
              <h3 class={`text-base text-gray-200 md:text-lg`}>{item.name}</h3>
              <p class="text-sm text-gray-400 md:text-base">
                {item.description}
              </p>
            </div>
          </a>
        )}
      </For>
      <a
        class="flex items-center gap-1 text-gray-400 transition duration-300 ease-out hover:text-gray-200 hover:underline"
        href="https://github.com/K3ndev?tab=repositories"
        target="_blank"
      >
        View all Projects <AiOutlineArrowRight />
      </a>
    </section>
  );
}
