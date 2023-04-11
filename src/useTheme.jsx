import useLocalStorageState from "use-local-storage-state";

export const useTheme = () => {
  const [theme] = useLocalStorageState("theme");
  return [theme,theme==="dark"];
};

