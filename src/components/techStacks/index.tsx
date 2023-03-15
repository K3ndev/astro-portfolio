import { createSignal, onMount, onCleanup } from "solid-js";

export function TechStacks() {
  const [dataStacks, setDataStacks] = createSignal<string>();
  const [isFetchStacks, setIsFetchStacks] = createSignal(false);

  onMount(async () => {
    try {
      setIsFetchStacks(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/K3ndev/K3ndev/main/README.md"
      );
      const data = await response.text();
      let convertJson = data
        .replace(/```js\nconst profile = /, "")
        .replace(/```/, "")
        .replace(/'/g, '"')
        .replace(/(\w+):/g, '"$1":');
      convertJson = JSON.parse(convertJson);

      if (isFetchStacks()) {
        setDataStacks(data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  });

  onCleanup(() => {
    setIsFetchStacks(false);
  });

  return (
    <div class="mb-12">
      <h2>TechStacks</h2>

      <div class="w-full rounded-md flex items-center justify-between bg-gray-900 border-2 border-gray-900 dark:border-gray-50 p-2">
        <div class="font-mono text-sm  text-gray-50 mx-2">
          {dataStacks() && <code>{JSON.stringify(dataStacks())}</code>}
        </div>
      </div>
    </div>
  );
}
