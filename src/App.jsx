import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import ProfilePage from "./pages/PorilePage/ProfilePage"
import useAuthStore from "./store/authStore"

function App() {
  const authUser = useAuthStore(state => state.user)
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={ <HomePage authUser={authUser} /> } />
        <Route path="/auth" element={ <AuthPage authUser={authUser} />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
