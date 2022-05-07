import { Form } from "react-bootstrap";

function CheckBoxActive() {
  return (
    <Form>
      <Form.Check
        type="checkbox"
        id="default-checkbox"
        label="Favorite"
        defaultChecked
				disabled="true"
      />
    </Form>
  );
}

function CheckBoxNotActive() {
  return (
    <Form>
      <Form.Check
        type="checkbox"
        id="default-checkbox"
        label="Favorite"
				disabled="true"
      />
    </Form>
  );
}

export { CheckBoxActive, CheckBoxNotActive };
