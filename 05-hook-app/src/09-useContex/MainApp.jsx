import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage , AboutPage , LoginPage, Navbar, UserProvider } from './Index';

export const MainApp = () => {
  return (
    <UserProvider>
        
        <Navbar/>
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage />}  />
          <Route path="/about" element={ <AboutPage />} />
          <Route path="/login" element={ <LoginPage />}  />
          <Route path='/*' element={< Navigate to='' />}/>
        </Routes>
    </UserProvider>
  )
}
