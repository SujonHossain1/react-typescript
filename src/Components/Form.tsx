import { useState } from "react";

interface IUserForm {
    name: string;
    email: string;
    checked: boolean;
    age: number;
}

const Form = () => {
    const [form, setForm] = useState<IUserForm>({} as IUserForm);

    const inputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(form);
    }
    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputHandler} type="text" name="name" placeholder="Name" /> <br />
            <input onChange={inputHandler} type="email" name="email" placeholder="Email" /> <br />
            <input onChange={inputHandler} type="checkbox" name="checked" /> <br />
            <input onChange={inputHandler} type="number" name="age" id="" placeholder="Age" /> <br />
            <input type="submit" value="Submit Form Data" />
        </form>
    )
}

export default Form