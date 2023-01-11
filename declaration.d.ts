interface AbiItem {
  anonymous?: boolean
  constant?: boolean
  inputs?: AbiInput[]
  name?: string
  outputs?: AbiOutput[]
  payable?: boolean
  stateMutability?: StateMutabilityType
  type: AbiType
  gas?: number
}

interface Window {
  ethereum: MetaMaskInpageProvider
}

declare module 'react-highcharts/ReactHighstock.src'
