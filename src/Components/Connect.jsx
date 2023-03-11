import React from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, goerli } from 'wagmi/chains'
import { Web3Button } from '@web3modal/react'
import { useWeb3ModalTheme } from '@web3modal/react'
import { useContractRead } from 'wagmi'


const chains = [ goerli ,mainnet]
const projectId = 'ee99542a7cb804dd7dad849a268c6523'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

export const Connect = () => {

  return (
    
       <div >
         <WagmiConfig client={wagmiClient}>
           <HomePage />
         </WagmiConfig>
   
         <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
       </div>
   
  )
}
function HomePage() {
    const { theme, setTheme } = useWeb3ModalTheme()
    setTheme({
        themeMode: 'dark',
        themeVariables: {
          '--w3m-font-family': 'Roboto, sans-serif',
          '--w3m-accent-color': '#434345'
          // ...
        }
      })
  return (
     <div>
          <Web3Button />
     </div>
    )
}
