"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { EditIcon } from "../components/Icons";
import type { User } from "./page";
import { useState } from "react";
import ValidatedInput, {
  InputStateType,
} from "../components/ClientValidation/ValidatedInput";
export type ModalActionType = "save" | "discard";

export default function EditModal({ user }: { user: User }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [displayName, setDisplayName] = useState<InputStateType>({
    value: user.display_name || user.name,
    validity: "valid",
  });
  const [uscfID, setUSCFID] = useState<InputStateType>({
    value: user.uscf_username || "",
    validity: "valid",
  });
  const [chessComUsername, setChesscomUsername] = useState<InputStateType>({
    value: user.chesscom_username || "",
    validity: "valid",
  });
  const [lichessUsername, setLichessUsername] = useState<InputStateType>({
    value: user.lichess_username || "",
    validity: "valid",
  });

  const handleDiscard = () => {
    setDisplayName({
      value: user.display_name || user.name,
      validity: "valid",
    });
  };

  const handleSave = () => {
    // save to db
    window.location.reload();
  }

  // show loading button icon on save, add icons to buttons, reload on save success

  return (
    <>
      <Button isIconOnly onPress={onOpen}>
        <EditIcon />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Profile
              </ModalHeader>
              <ModalBody>
                <ValidatedInput
                  label="Display Name"
                  defaultValue={displayName.value}
                  state={displayName.value}
                  setState={setDisplayName}
                  validationConfig={{
                    type: "string",
                    max: 50,
                  }}
                />
                <ValidatedInput
                  label="USCF ID"
                  defaultValue={displayName.value}
                  state={displayName.value}
                  setState={setDisplayName}
                  validationConfig={{
                    type: "string",
                    max: 50,
                  }}
                />
                <ValidatedInput
                  label="Chess.com Username"
                  defaultValue={displayName.value}
                  state={displayName.value}
                  setState={setDisplayName}
                  validationConfig={{
                    type: "string",
                    max: 50,
                  }}
                />
                <ValidatedInput
                  label="Lichess Username"
                  defaultValue={displayName.value}
                  state={displayName.value}
                  setState={setDisplayName}
                  validationConfig={{
                    type: "string",
                    max: 50,
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={() => {
                    onClose();
                    handleDiscard();
                }}>
                  Discard
                </Button>
                <Button color="primary" onPress={() => {
                    onClose();
                    handleSave();
                }}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
