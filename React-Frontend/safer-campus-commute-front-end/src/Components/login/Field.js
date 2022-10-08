import { Form } from "react-bootstrap";

export default function Field({ type, name, onFormEntry }) {
  return (
    <>
      <Form.Group className="text-start">
        <Form.Control
          type={type}
          name={name}
          placeholder={name}
          onChange={onFormEntry}
          required={true}
        />
      </Form.Group>
    </>
  );
}
