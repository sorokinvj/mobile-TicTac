import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { XOSideProvider } from "./components/XOSideProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <XOSideProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </XOSideProvider>
      </SafeAreaProvider>
    );
  }
}
