export type Department = "HR" | "IT" | "Marketing";

export type Employee = {
    id: string;
    name: string;
    department: Department;
    superior?: Employee;
    subordinates: Employee[];
}

const ceo: Employee = {
    id: "e0",
    name: "Alice Johnson",
    department: "HR",
    subordinates: [],
};

const itManager: Employee = {
    id: "e1",
    name: "Bob Smith",
    department: "IT",
    superior: ceo,
    subordinates: [],
};

const marketingManager: Employee = {
    id: "e2",
    name: "Carol Lee",
    department: "Marketing",
    superior: ceo,
    subordinates: [],
};

const dev1: Employee = {
    id: "e3",
    name: "David Kim",
    department: "IT",
    superior: itManager,
    subordinates: [],
};

const dev2: Employee = {
    id: "e4",
    name: "Ella Brown",
    department: "IT",
    superior: itManager,
    subordinates: [],
};

const marketer1: Employee = {
    id: "e5",
    name: "Frank Wilson",
    department: "Marketing",
    superior: marketingManager,
    subordinates: [],
};

itManager.subordinates.push(dev1, dev2);
marketingManager.subordinates.push(marketer1);
ceo.subordinates.push(itManager, marketingManager);

const company: Employee[] = [ceo, itManager, marketingManager, dev1, dev2, marketer1];
export { company }

