import type { Employee } from "../data/company"

type EmployeeCardProps = {
    employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
    // TODO: Employee verlinken
    return <div className="employee-card">
        <p>
            <span className="text-bold">{employee.name}</span><br />
            {employee.department}
        </p>
    </div>
}