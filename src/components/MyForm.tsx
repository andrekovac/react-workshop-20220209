import { FormEvent, useState } from "react";

const MyForm: React.FC = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="email"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Name submitten</button>
    </form>
  );
};

export default MyForm;
