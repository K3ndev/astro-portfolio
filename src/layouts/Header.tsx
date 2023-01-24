import { BsSun } from "solid-icons/bs";

type headerProps = {
  home?: boolean;
  blog?: boolean;
};

function Header(props: headerProps) {
  const { home, blog } = props;

  return (
    <header class="container mx-auto max-w-2xl px-4">
      <nav class="w-full flex justify-between mt-8 mb-14">
        <ul class="flex gap-1">
          <li>
            <a
              class={`cursor-pointer ${
                home ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              class={`cursor-pointer ${
                blog ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2`}
            >
              Blogs
            </a>
          </li>
          <li>
            <a class="cursor-pointer text-gray-400 hover:bg-gray-800 hover:underline rounded-lg p-1 md:px-3 md:py-2">
              Resume
            </a>
          </li>
        </ul>
        <div>
          <button class="block bg-gray-700 p-2 rounded-lg" aria-label='toggleMode'>
            <BsSun class="text-xl " />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
