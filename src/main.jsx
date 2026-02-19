import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './context/RecipeContext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <RecipeContext>
        <App />
        <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" // or "light", "colored"
        />
    </RecipeContext>
</BrowserRouter>

)
