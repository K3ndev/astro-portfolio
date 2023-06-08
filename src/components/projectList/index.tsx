import { For, onMount, createSignal } from "solid-js";
import { FaRegularFileCode } from "solid-icons/fa";
import { AiOutlineArrowRight } from "solid-icons/ai";
import { Loading } from './Loading'

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
      const keywords = ["astro", "solid", "solidstart", "react", "next", "vue", "nuxt", "svelte", "sveltekit"];
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
            class="min-h-[68px] md:min-h-[76px] bg-gray-800 mb-3 p-3 cursor-pointer flex items-center gap-3 md:gap-4 hover:scale-105 duration-300"
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
              <h3
                class={`text-gray-200 text-base md:text-lg`}
              >
                {item.name}
              </h3>
              <p class="text-gray-400 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </a>
        )}
      </For>
      <a
        class="flex items-center gap-1 hover:underline text-gray-400 hover:text-gray-200"
        href="https://github.com/K3ndev?tab=repositories"
        target="_blank"
      >
        View all Projects <AiOutlineArrowRight />
      </a>
    </section>
  );
}
