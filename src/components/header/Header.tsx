import { BsSpeedometer } from "solid-icons/bs";
import { createSignal, onMount, onCleanup } from "solid-js";

export function Header() {
  const [location, setLocation] = createSignal<string>();

  onMount(() => {
    const handler = () => setLocation(window.location.pathname);

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handler);

      handler();
    }   
    
    onCleanup(() => {
      window.removeEventListener('popstate', handler);
    })
  })

 
 
  return (
      <header class="container mx-auto max-w-2xl px-4">
        <nav class="text-md mb-16 mt-8 flex w-full items-center justify-between">
          <ul class="flex gap-1 lg:gap-2 text-slate-400">
            <li>
              <a
                href="/"
                class={`${location() === '/' ? 'text-white' : ''} cursor-pointer rounded-lg p-1 transition duration-300 ease-out hover:bg-slate-800 md:px-3 md:py-2`}
              >
                Home
              </a>
            </li>
            <li>
              <span class="text-slate-400" aria-label="Separator">/</span>
            </li>
            <li>
              <a
                href="/gists/"
                class={`${location() === '/gists/' ? 'text-white' : ''} cursor-pointer rounded-lg p-1 transition duration-300 ease-out hover:bg-slate-800 md:px-3 md:py-2`}
              >
                Gist
              </a>
            </li>
            <li>
              <span class="text-slate-400" aria-label="Separator">/</span>
            </li>
            <li>
              <a
                href="/guestBook/"
                class={`${location() === '/guestBook/' ? 'text-white' : ''} cursor-pointer rounded-lg p-1 transition duration-300 ease-out hover:bg-slate-800 md:px-3 md:py-2`}
              >
                GuestBook
              </a>
            </li>
          </ul>
          <div>
            <a
              class="block cursor-pointer rounded-lg border border-slate-700 bg-slate-700 p-2 transition duration-300 ease-out hover:border hover:border-slate-400"
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
