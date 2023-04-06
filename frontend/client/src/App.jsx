import { ChatProvider } from './contexts/ChatsContext'
import { MobileProvider } from './contexts/MobileContext'
import MainWrapper from './pages/MainWrapper'

function App() {

  return (
    <ChatProvider>
      <MobileProvider>
        <MainWrapper />
      </MobileProvider>
    </ChatProvider>
  )

}

export default App
