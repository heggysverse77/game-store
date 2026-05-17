import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { SettingsProvider } from './context/settingsContext';
import "./index.css"

function App() {


  return (
    <>
    <SettingsProvider>
    <RouterProvider router={router}>
    
    </RouterProvider>
    </SettingsProvider>
    </>
  )
}

export default App
