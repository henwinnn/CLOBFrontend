import "./App.css";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./defaultConfig/config";
import "@rainbow-me/rainbowkit/styles.css";
import Header from "./components/Header";
import Body from "./components/Body";

const queryClient = new QueryClient();

const customTheme = darkTheme({
  accentColor: "#0d7ab0",
  accentColorForeground: "white",
  borderRadius: "large",
  fontStack: "system",
});

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={customTheme}>
            <Header />
            <Body />
            <Toaster />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default App;
