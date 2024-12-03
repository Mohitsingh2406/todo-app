import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import TodoContextProvider from './context/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
		clientId="94c210d611624d839e81449b4132061c"
		domain="https://loisem.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>
      <TodoContextProvider>
        <App />
    </TodoContextProvider>
  </KindeProvider>
  </React.StrictMode>,
)
