import type { Employee } from "../data/company"

type EmployeeCardProps = {
    employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
    // TODO: Employee verlinken
    return <div className="employee-card">
        <h3>{employee.name}</h3>
        <p>{employee.department}</p>
    </div>
}