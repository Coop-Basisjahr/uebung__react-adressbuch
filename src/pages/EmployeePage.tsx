import EmployeeCard from "../components/EmployeeCard";
import EmployeeGrid from "../components/EmployeeGrid";
import employeeRepo from "../data/EmployeeRepository"

export default function EmployeePage() {

    // TODO: Employee anhand des URL Parameter {id} laden
    const employee = employeeRepo.findById("h0");

    return <>
        <h1>{employee.name}</h1>
        <p>Abteilung: {employee.department}
            {employee.superior && <>
                <br />
                {/* TODO: Vorgesetzten verlinken */}
                <span>Vorgesetzte(r): {employee.superior.name}</span>
            </>}
        </p>
        {employee.subordinates.length > 0 && <>
            <h2>Direkt untergestellte</h2>
            <EmployeeGrid employees={employee.subordinates} />
        </>}
    </>
}