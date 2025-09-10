// Define Teacher interface
interface Teacher {
  readonly firstName: string;      // cannot be changed after initialization
  readonly lastName: string;       // cannot be changed after initialization
  fullTimeEmployee: boolean;       // must always exist
  yearsOfExperience?: number;      // optional
  location: string;                // must always exist
  [key: string]: any;              // allows extra attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra attribute
};

console.log(teacher3);

