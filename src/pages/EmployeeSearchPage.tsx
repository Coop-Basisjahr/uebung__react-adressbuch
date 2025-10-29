import EmployeeCard from "../components/EmployeeCard";
import employeeRepo from "../data/EmployeeRepository"



export default function EmployeeSearchPage() {
    const name = "";
    const department = "";
    const employees = employeeRepo.findWhere(name, department);

    return <>
        {employees.map(e => <EmployeeCard key={e.id} employee={e} />)}
    </>
}