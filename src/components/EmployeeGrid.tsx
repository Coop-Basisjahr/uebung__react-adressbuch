import type { Employee } from "../data/company"
import EmployeeCard from "./EmployeeCard"

type EmployeeGridProps = {
    employees: Employee[]
}

export default function EmployeeGrid({ employees }: EmployeeGridProps) {
    return <div className="employees-container">
        {employees.map(e => <EmployeeCard key={e.id} employee={e} />)}
    </div>
}