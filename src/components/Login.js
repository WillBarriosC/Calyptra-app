import { useState } from "react";
import { Modal, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { Mail } from "../helpers/Mail";
import { Password } from "../helpers/Password";

export default function Login() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <button
        className="flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-300 sm:px-8"
        onClick={handler}
      >
        Login
      </button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to{" "}
            <Text b size={18}>
              Calyptra
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            type="password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="flex items-center justify-center rounded-md border border-transparent bg-red-100 px-4 py-3 text-base font-medium text-red-600 shadow-sm hover:bg-red-300 sm:px-8"
            onClick={closeHandler}
          >
            Close
          </button>
          <button
            className="flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-300 sm:px-8"
            onClick={closeHandler}
          >
            Sign In
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
