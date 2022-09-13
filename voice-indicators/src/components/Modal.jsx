import { ModalComponents } from "../other/apis";

export function Modal({ e, state }) {
  return (
    <ModalComponents.ModalRoot
      transitionState={e.transitionState}
      size="large"
      className="vi--modal">


    </ModalComponents.ModalRoot>
  );
}