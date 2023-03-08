import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const addUserHandler = (e) => {
		e.preventDefault();
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" />
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
