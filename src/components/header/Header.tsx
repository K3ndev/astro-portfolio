import { BsSpeedometer } from "solid-icons/bs";

type headerProps = {
  home?: boolean;
  blog?: boolean;
  guestBook?: boolean;
};

export function Header(props: headerProps) {
  const { home, blog, guestBook } = props;

  return (
    <header class="container mx-auto max-w-2xl px-4">
      <nav class="w-full flex items-center justify-between mt-8 mb-16">
        <ul class="flex gap-1">
          <li>
            <a
              href="/"
              class={`cursor-pointer ${
                home ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2 `}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://gist.github.com/K3ndev"
              target="_blank"
              class={`cursor-pointer ${
                blog ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2`}
            >
              Gist
            </a>
          </li>
          <li>
            <a
              href="/guestBook/"
              class={`cursor-pointer ${
                guestBook ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2`}
            >
              GuestBook
            </a>
          </li>
          {/* <li>
            <a class="cursor-pointer text-gray-400 hover:bg-gray-800 hover:underline rounded-lg p-1 md:px-3 md:py-2">
              Resume
            </a>
          </li> */}
        </ul>
        <div>
          <a
            class="block bg-gray-700 p-2 rounded-lg border border-gray-700 hover:border hover:border-gray-400"
            // href="#"
            // target="_blank"
          >
            <BsSpeedometer class="text-xl cursor-pointer" />
          </a>
        </div>
      </nav>
    </header>
  );
}
