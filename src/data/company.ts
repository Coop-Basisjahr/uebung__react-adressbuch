export type Department = "HR" | "IT" | "Marketing";

export type Employee = {
    id: string;
    name: string;
    department: Department;
    superior?: Employee;
    subordinates: Employee[];
}

const ceo: Employee = {
    id: "h0",
    name: "Alice Johnson",
    department: "HR",
    subordinates: [],
};

const hrManager: Employee = {
    id: "h1",
    name: "Indie Hawkins",
    department: "HR",
    superior: ceo,
    subordinates: []
}

const itManager: Employee = {
    id: "it1",
    name: "Bob Smith",
    department: "IT",
    superior: ceo,
    subordinates: [],
};

const marketingManager: Employee = {
    id: "m1",
    name: "Carol Lee",
    department: "Marketing",
    superior: ceo,
    subordinates: [],
};

const hr: Employee[] = [
    {
        id: "h1",
        name: "Devin Monroe",
        department: "HR",
        superior: hrManager,
        subordinates: []
    },
    {
        id: "h2",
        name: "Zariah Moss",
        department: "HR",
        superior: hrManager,
        subordinates: []
    }
]

const devs: Employee[] = [
    {
        id: "d1",
        name: "Victor Gray",
        department: "IT",
        superior: itManager,
        subordinates: [],
    },
    {
        id: "d2",
        name: "David Kim",
        department: "IT",
        superior: itManager,
        subordinates: [],
    },
    {
        id: "d3",
        name: "Ella Brown",
        department: "IT",
        superior: itManager,
        subordinates: [],
    },
    {
        id: "d4",
        name: "Robin Baldwin",
        department: "IT",
        superior: itManager,
        subordinates: [],
    },
    {
        id: "d5",
        name: "Killian Price",
        department: "IT",
        superior: itManager,
        subordinates: [],
    },
    {
        id: "d6",
        name: "Layla Park",
        department: "IT",
        superior: itManager,
        subordinates: [],
    }
]



const marketers: Employee[] = [
    {
        id: "m2",
        name: "Frank Wilson",
        department: "Marketing",
        superior: marketingManager,
        subordinates: [],
    }
]

itManager.subordinates = devs;
marketingManager.subordinates = marketers;
hrManager.subordinates = hr;
ceo.subordinates.push(hrManager, itManager, marketingManager);

const company: Employee[] = [ceo, hrManager, itManager, marketingManager, ...devs, ...marketers];
export { company }

