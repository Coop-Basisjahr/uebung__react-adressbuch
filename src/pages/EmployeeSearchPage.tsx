import { useSearchParams } from "react-router-dom";
import EmployeeGrid from "../components/EmployeeGrid";
import employeeRepo from "../data/EmployeeRepository"



export default function EmployeeSearchPage() {

    const [params] = useSearchParams()

    const name = params.get("name") || "";
    const department = params.get("department") || "";
    const employees = employeeRepo.findWhere(name, department);

    return <>
        <h1 className="text-center">Suchergebnisse</h1>
        <EmployeeGrid employees={employees} />
    </>
}