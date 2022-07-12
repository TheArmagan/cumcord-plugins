import { Modal } from "../components/Modal";
import { openModal } from "../other/apis";

export async function openVoicesModal() {
  openModal((e) => (
    <Modal e={e}/>
  ))
}