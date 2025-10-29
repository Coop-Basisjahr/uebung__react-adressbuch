import type { Employee } from "./company"
import { company } from "./company";

const EmployeeRepo = (employees: Employee[]): {
    findById: (id: string) => Employee;
    findWhere: (name: string, department: string) => Employee[];
} => {
    return {
        findById: id => {
            const employeesWithId = employees.filter(e => e.id == id);
            if (employeesWithId.length != 1) throw Error(`Keine Mitarbeiter mit ID ${id} gefunden`)
            return employeesWithId[0];
        },
        findWhere: (name, department) => {
            if (name == "" && department == "") return employees;
            return employees.filter(e => {
                if (name == "") return e.department == department
                if (department == "") return e.name.toLowerCase().includes(name.toLowerCase())
                return e.name.toLowerCase().includes(name.toLowerCase()) && e.department == department
            });
        }
    }
}

export default EmployeeRepo(company);