import { Connect } from "./Components/Connect"
import { Web3Button } from '@web3modal/react'
import Abi from './Components/Abi.json'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ethers } from 'ethers'



// const ReadContracts = () => {
  
//     const { config } = usePrepareContractWrite({
//         address: '0x75d46c1070a91B90Dbc57274b9660EFb392C9bdB',
//         abi: Abi,
//         functionName: 'purchase',
//         args: [1],
//         overrides: {value: ethers.utils.parseEther("0.001")}
//       })
//       const { data, isLoading, isSuccess, write: Mint } = useContractWrite(config)
//     return (
//     <div>
//         <p>name: </p>
//     </div>
//   )
// }
 const App  = () => {
  return (    
    <div >
        {/* <ReadContracts /> */}
        <div className="flex m-2 justify-between">
        <h1 className="font-bold text-lg">Unnamed</h1>
        <Connect/>
        </div>
        <main className="flex flex-col items-center">
            <h1 className="font-bold text-lg m-2 text-center">Mint Your Nft before Tony did it</h1>
            <img className="h-[600px]" src="/src/assests/tony.jpg" alt="" />
            <button onClick={()=>{
               
            }} className="m-2 bg-slate-300 p-2 rounded-lg hover:bg-slate-600">
                <p>Mint</p>
            </button>
        </main>
    </div>
  )
}

export default App ;