import React, { useState } from "react";

interface IUserForm {
    name: string;
    email: string;
    phone: string;
    password: string;
}
interface IFileForm {
    lastModified: number;
    name: string;
    type: string;
}
const Form = () => {
    const [user, setUser] = useState<IUserForm>({} as IUserForm);
    const [files, setFiles] = useState<IFileForm[]>([] as IFileForm[]);

    const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setUser((state) => ({
            ...state,
            [name]: value
        }))
    };

    const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const getFile = event.target.files;
        if (!getFile) return;
        const fileItem = getFile[0];

        setFiles((files) => [
            ...files,
            fileItem
        ])

    }
    console.log(files);

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(user);
    }
    return (
        <div className="container">
            <form className="my-5" onSubmit={submitHandler}>
                <input className="form-control" onChange={inputHandler} type="text" name="name" id="" placeholder="Name" />
                <input className="form-control" onChange={inputHandler} type="p" name="email" id="" placeholder="Email" />
                <input className="form-control" onChange={inputHandler} type="password" name="password" id="" placeholder="Password" />
                <input className="form-control" onChange={inputHandler} type="text" name="phone" id="" placeholder="Phone" />
                {files.map(file => (
                    <p key={file.lastModified}> {file.name} </p>
                ))}
                <input className="form-control" onChange={fileHandler} type="file" name="file" id="" multiple />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form