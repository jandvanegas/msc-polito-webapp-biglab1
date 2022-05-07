import { Form } from "react-bootstrap";

function CheckBoxActive() {
	return (
		<Form>
			<Form.Check
				type="checkbox"
				id="default-checkbox"
				label="Favorite"
				defaultChecked
			/>
		</Form>
	);
}

function CheckBoxNotActive() {
	return (
		<Form>
			<Form.Check type="checkbox" id="default-checkbox" label="Favorite" />
		</Form>
	);
}

export { CheckBoxActive, CheckBoxNotActive };
