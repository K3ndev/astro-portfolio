import { For, onMount, createSignal } from "solid-js";
import { FaRegularFileCode } from "solid-icons/fa";
import { AiOutlineArrowRight } from "solid-icons/ai";
import { Loading } from "./Loading";


const fetchRepos = async () => {
    try {
      const username = "K3ndev";
      const url = `https://api.github.com/users/${username}/gists`;
  
      const data = await fetch(url)

      const res = await data.json();
  
      return res; 
    } catch (err) {
      console.log(err);
    }
  };

export function GistList() {
  const [data, setData] = createSignal([]);

  onMount(() => {
    fetchRepos().then((res) => {
        const filteredGists = res.map((repo: any) => ({
            html_url: repo.html_url,
            filename: repo.files[Object.keys(repo.files)[0]].filename,
            updated_at: repo.updated_at,
        }));
        setData(filteredGists);
    });
  });

  return (
    <section class="mb-12">
      {/* card */}
      <For each={data()} fallback={<Loading />}>
        {(item: any) => (
          <a
          class="mb-3 flex cursor-pointer items-center gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:gap-4"
          href={item.html_url}
          target="_blank"
        >
          <div>
            <FaRegularFileCode class="text-xl" />
          </div>
          <div>
            <h3 class={`text-base text-white md:text-lg`}>
              {item.filename}
            </h3>
            <p class="text-sm text-slate-400 md:text-base">
              Updated at: {item.updated_at}
            </p>
          </div>
        </a>
        )}
      </For>
      <div class="flex items-center gap-1">
        <a
        class="inline text-slate-400 transition duration-300 ease-out hover:text-cyan-600 hover:underline"
        href="https://gist.github.com/K3ndev"
        target="_blank"
      >
        View all Gist <AiOutlineArrowRight class="inline"/>
      </a>
      </div>
    </section>
  );
}
