interface IProps {
    name: string;
    email?: string;
}
const Welcome = ({ name, email }: IProps) => {
    return (
        <div>
            <h3> Name:  {name}, Email: {email}  </h3>
        </div>
    )
}

export default Welcome