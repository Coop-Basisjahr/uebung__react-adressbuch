import EmployeeGrid from "../components/EmployeeGrid";
import employeeRepo from "../data/EmployeeRepository"



export default function Index() {

    // TODO: URL Suchparameter auslesen und in `name` und `department` speichern
    const name = "";
    const department = "";
    const employees = employeeRepo.findWhere(name, department);

    return <>
        <h1 className="text-center">Adressbuch</h1>
        <EmployeeGrid employees={employees} />
    </>
}