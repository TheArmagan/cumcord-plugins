import { Modal } from "../components/Modal";
import { openModal } from "../other/apis";

export async function openInfoModal(data) {
  openModal((e) => (
    <Modal e={e} data={data} />
  ))
}