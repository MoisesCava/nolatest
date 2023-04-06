import { ChatProvider } from './contexts/ChatsContext'
import { MobileProvider } from './contexts/MobileContext'
import { ProfileProvider } from './contexts/ProfileContext'
import MainWrapper from './pages/MainWrapper'

function App() {

  return (
    <ChatProvider>
      <MobileProvider>
        <ProfileProvider>
          <MainWrapper />
        </ProfileProvider>
      </MobileProvider>
    </ChatProvider>
  )

}

export default App
