import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Home, HowItWorksPage, ForBrands, ForCreators, CreatorsPage, About } from './pages/pages'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/for-brands" element={<ForBrands />} />
        <Route path="/for-creators" element={<ForCreators />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
