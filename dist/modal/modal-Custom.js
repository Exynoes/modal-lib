import { BaseModal } from "./modal-BaseModal.js";
export class ModalCustom extends BaseModal {
    constructor(modalId) {
        const modalElement = document.getElementById(modalId);
        if (!modalElement)
            throw new Error(`Modal avec l'ID "${modalId}" introuvable`);
        super(modalElement);
        modalElement.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", () => this.close()));
    }
}
