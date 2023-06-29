import { BsSpeedometer } from "solid-icons/bs";

type headerProps = {
  home?: boolean;
  guestBook?: boolean;
  gists?: boolean;
};


export function Header(props: headerProps) {
  const { home, guestBook, gists } = props;


  return (
    <header class="container mx-auto max-w-2xl px-4">
      <nav class="w-full flex items-center justify-between mt-8 mb-16">
        <ul class="flex gap-5 sm:gap-1 md:gap-2">
          <li>
            <a
              href="/"
              class={`cursor-pointer ${
                home ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2 duration-300 transition ease-out`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/gists/"
              class={`cursor-pointer ${
                gists ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2 duration-300 transition ease-out`}
            >
              Gist
            </a>
          </li>
          <li>
            <a
              href="/guestBook/"
              class={`cursor-pointer ${
                guestBook ? "text-white" : "text-gray-400"
              } hover:bg-gray-800 rounded-lg p-1 md:px-3 md:py-2 duration-300 transition ease-out`}
            >
              GuestBook
            </a>
          </li>
        </ul>
        <div>
          <a
            class="block bg-gray-700 p-2 rounded-lg border border-gray-700 hover:border hover:border-gray-400 cursor-pointer duration-300 transition ease-out"
            href="https://k3ndev-performance.netlify.app/k3ndev/"
            target="_blank"
            aria-label="Benchmark K3ndev Personal web site projects"
          >
            <BsSpeedometer class="text-xl" />
          </a>
        </div>
      </nav>
    </header>
  );
}
