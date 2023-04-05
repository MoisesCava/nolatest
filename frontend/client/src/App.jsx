import { ChatProvider } from './contexts/ChatsContext'
import MainWrapper from './pages/MainWrapper'

function App() {

  return (
    <ChatProvider>
      <MainWrapper />
    </ChatProvider>
  )

}

export default App
