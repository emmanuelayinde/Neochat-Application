import { Route, Routes } from "react-router-dom"
import { AuthLayout, ForgotPassword, Layout, Login, NotFound, Register, ResetPassword } from "./pages"



function App() {
  return (
    <Routes>
      {/* app */}
      <Route path="/" element={<Layout />} />
      {/* auth */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      {/* 404 Route */}
      <Route path="not-found" element={<NotFound />} />

      {/* chat */}
      {/* story */}
      {/* <Route path="/stories" element={<NewUserStories />}>
        <Route index element={<NewUserStories />} />
        <Route path="" element={<UserStories />} />
      </Route> */}
      {/* user */}
      {/* <Route path="/user/:username" >
        <Route index element={<UserProfile />} />
        <Route path="setting" element={<UserSetting />} />
        <Route path="profile" element={<UserProfile />} />
      </Route> */}
      {/* not-found */}
      {/* <Route path="not-found" element={<NotFound />} /> */}
      {/* <Route path="*" element={Navigate({ to: '/not-found' })} /> */}
    </Routes>
  )
}

export default App
