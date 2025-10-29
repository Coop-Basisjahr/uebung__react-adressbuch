import { Route, Routes } from "react-router-dom"
import EmployeePage from "./pages/EmployeePage"
import EmployeeSearchPage from "./pages/EmployeeSearchPage"

function App() {
    return <Routes>
        <Route path="/" element={<EmployeeSearchPage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
    </Routes>
}

export default App
