import { For } from "solid-js";
import { Loading } from "./Loading";
import { Error } from "./Error"
import { FetchRepos } from "../../hooks";

type DataType = {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
};

export function ProjectList() {

  const { data, isError, isLoading } = FetchRepos()

  return (
    <section class="mb-12">
      {/* card */}
      {!isError() && <For each={data()} fallback={<Loading />}>
        {(item: DataType) => (
          <div class="mb-3 flex min-h-[68px] justify-between gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4">
            <div class="flex w-full gap-3">
              <div class="flex items-center">
                <a href={item.html_url} target="_blank" aria-label={`Github Link to ${item.name}`}>
                  <svg class="cursor-pointer text-xl hover:fill-cyan-600" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="1em" width="1em" style="overflow: visible;"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zm96-34c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"></path></svg>
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
                <p class="text-sm text-slate-400 md:text-base italic">
                  {item.description}
                </p>
              </div>
            </div>
            <div class="flex items-start pt-2">
              {item.homepage !== "" ? (
                <a href={item.homepage} target="_blank" aria-label={`Website Link to ${item.name}`}>
                  <svg class="cursor-pointer text-xl hover:fill-cyan-600" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible;"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                </a>
              ) : (
                <p>
                  <svg class="inline cursor-pointer text-xl hover:cursor-not-allowed" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible;"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                </p>
              )}
            </div>
          </div>
        )}
      </For>}
      {isError() && !isLoading() && <Error />}
      <div class="flex items-center gap-1">
        <a
          class="inline text-slate-400 transition duration-300 ease-out hover:text-cyan-600 hover:underline"
          href="https://github.com/K3ndev?tab=repositories"
          target="_blank"
        >
          View all Projects
          <svg class="inline" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible;"><path d="M869 487.8 491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
        </a>
      </div>
    </section>
  );
}
