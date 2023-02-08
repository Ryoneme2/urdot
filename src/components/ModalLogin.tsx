import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

import * as Component from "./index";
import Discord from "./Icon/Discord";
import Google from "./Icon/Google";

export default function ModalLogin() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button
        css={{
          paddingRight: "0.3rem",
          paddingLeft: "0.3rem",
        }}
        auto
        light
        onPress={handler}
      >
        Login
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18} className="ml-1">
              UrDot!!
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Component.SignProvider
            provider="discord"
            icon={<Discord />}
            context="Continue With Discord"
          />
          <Component.SignProvider
            provider="google"
            icon={<Google />}
            context="Continue With Google"
          />
          {/* <Input
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
            type={"password"}
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          /> */}
          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row> */}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
