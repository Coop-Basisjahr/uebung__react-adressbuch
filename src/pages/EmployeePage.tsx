import EmployeeCard from "../components/EmployeeCard";
import employeeRepo from "../data/EmployeeRepository"

export default function EmployeePage() {

    // TODO: Employee anhand des URL Parameter {id} laden
    const employee = employeeRepo.findById("e1");

    return <>
        <h1>{employee.name}</h1>
        <p>{employee.department}</p>
        {employee.superior &&
            // TODO: Vorgesetzten verlinken
            <p>Vorgesetzter: {employee.superior.name}</p>
        }
        {employee.subordinates.length > 0 && <>
            <h2>Direkt untergestellte</h2>
            {employee.subordinates.map(sub => <EmployeeCard
                key={sub.id}
                employee={sub}
            />)}
        </>}
    </>
}