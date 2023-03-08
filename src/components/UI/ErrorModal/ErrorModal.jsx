import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

const ErrorModule = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button>Okay</Button>
			</footer>
		</Card>
	);
};

export default ErrorModule;
