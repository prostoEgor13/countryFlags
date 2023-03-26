import useLocalStorageState from "use-local-storage-state";

export const useThemeMain = () => {
  const [themeMain] = useLocalStorageState("themeMain");
  return themeMain;
};
