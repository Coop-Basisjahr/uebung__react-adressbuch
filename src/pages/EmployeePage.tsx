import { Link, useParams } from "react-router-dom";
import EmployeeGrid from "../components/EmployeeGrid";
import employeeRepo from "../data/EmployeeRepository"

export default function EmployeePage() {

    const { id } = useParams()
    const employee = employeeRepo.findById(id || "h0");

    return <>
        <h1>{employee.name}</h1>
        <p>Abteilung: {employee.department}
            {employee.superior && <>
                <br />
                <Link to={`/employee/${employee.superior.id}`}>
                    <span>Vorgesetzte(r): {employee.superior.name}</span>
                </Link>
            </>}
        </p>
        {employee.subordinates.length > 0 && <>
            <h2>Direkt untergestellte</h2>
            <EmployeeGrid employees={employee.subordinates} />
        </>}
    </>
}