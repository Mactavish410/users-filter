export interface User {
  id: number;
  name: string;
  age: number;
}

export interface Query {
  name?: string;
  age?: string;
  limit: number;
  offset: number;
}

const users: User[] = [
  { name: "Jack", id: 0, age: 26 },
  { name: "Helen", id: 1, age: 36 },
  { name: "Rick", id: 2, age: 44 },
  { name: "Tom", id: 3, age: 45 },
  { name: "Sarah", id: 4, age: 40 },
  { name: "Linda", id: 5, age: 41 },
  { name: "Tom", id: 6, age: 42 },
  { name: "Shief", id: 7, age: 21 },
  { name: "Bred", id: 8, age: 17 },
  { name: "Till", id: 9, age: 2 },
  { name: "Kane", id: 10, age: 55 },
  { name: "Jack", id: 11, age: 23 },
  { name: "Helen", id: 12, age: 44 },
  { name: "Rick", id: 13, age: 54 },
  { name: "Tom", id: 14, age: 23 },
  { name: "Sarah", id: 15, age: 54 },
  { name: "Linda", id: 16, age: 12 },
];

export const requestUsers = (params: Query): Promise<User[]> => {
  const filtered = users
    .filter((el) =>
      params.name
        ? el.name.toLowerCase().includes(params.name.toLowerCase())
        : true
    )
    .filter((el) => (params.age ? String(el.age) === params.age : true));

  const paginated = filtered.slice(params.offset, params.offset + params.limit);

  return new Promise((resolve) => {
    setTimeout(() => resolve(paginated), 500);
  });
};
