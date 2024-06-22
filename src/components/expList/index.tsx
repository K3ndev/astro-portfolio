import { For } from "solid-js";

type mockExpDataType = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  isPresent: boolean
};

const mockExpData = [
  {
    name: 'Sta. Clara International Corp.',
    startDate: 'June 2024',
    endDate: 'Present',
    description: 'Junior Web Developer (Remote)',
    isPresent: true
  },
  {
    name: 'Dianoia Tech',
    startDate: 'Feb 2024',
    endDate: 'May 2024',
    description: 'Software Engineer (Remote)',
    isPresent: false
  }
]

export function ExpList() {

  return (
    <section class="mb-12">
      {/* card */}
      <For each={mockExpData}>
          {(item: mockExpDataType, index) => (
          <div class="mb-3 flex min-h-[68px] justify-between gap-3 bg-slate-800 p-3 transition duration-300 ease-in-out hover:scale-105 md:min-h-[76px] md:gap-4">
            <div class="flex w-full gap-3">
              <div class="flex items-center">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>    </div>
              </div>
              <div>
                <div class={`text-base text-white md:text-lg ${item.isPresent ? "animate-pulse" : ""}`}>
                  {item.description}
                </div>
                <p class="text-sm text-slate-400 md:text-base italic">
                  ~ {item.name}{' '}<span class="text-xs">({`${item.startDate} - ${item.endDate}`})</span>
                </p>
              </div>
            </div>
          </div>
          )}
        </For>
    </section>
  );
}
