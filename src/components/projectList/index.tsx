import { For } from "solid-js";
import { dataProj } from "../../data/data";
import { FaRegularFileCode } from "solid-icons/fa";
import { AiOutlineArrowRight } from "solid-icons/ai";

// make this ssr

function ProjectList() {
  return (
    <section class="mb-12">
      {/* card */}
      <For each={dataProj} fallback={<div>Loading...</div>}>
        {(item) => (
          <a
            class="bg-gray-800 mb-3 p-3 cursor-pointer flex items-center gap-3 md:gap-4 hover:scale-105 duration-300"
            href={item.projUrl}
            target="_blank"
          >
            <div>
              <FaRegularFileCode class="text-xl" />
            </div>
            <div>
              <h3 class="text-gray-200 text-base">{item.projName}</h3>
              <p class="text-gray-400 text-sm md:text-base">{item.projDesc}</p>
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

export default ProjectList;
