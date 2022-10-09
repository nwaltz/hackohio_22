import { Form } from "react-bootstrap";

export default function Field({ type, name, placeholder, onFormEntry }) {
  return (
    <>
      <Form.Group className="text-start col-12">
        <Form.Control
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onFormEntry}
          required={true}
        />
      </Form.Group>
    </>
  );
}
