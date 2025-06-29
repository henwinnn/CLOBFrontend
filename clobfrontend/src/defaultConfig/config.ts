import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { monadTestnet } from "viem/chains";

export const config = getDefaultConfig({
  appName: "Monad Network App",
  projectId: "YOUR_PROJECT_ID", // Replace with your WalletConnect projectId
  chains: [monadTestnet],
});
