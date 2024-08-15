import { ConnectButton } from '@rainbow-me/rainbowkit'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
