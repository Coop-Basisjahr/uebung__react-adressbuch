import { Link } from "react-router-dom";
import type { Employee } from "../data/company"

type EmployeeCardProps = {
    employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
    return <Link to={`/employee/${employee.id}`}>
        <div className="employee-card">
            <p>
                <span className="text-bold">{employee.name}</span><br />
                {employee.department}
            </p>
        </div>
    </Link>
}