import { BaseModal } from "./modal-BaseModal.js";
export class ModalConfirm extends BaseModal {
    constructor(options) {
        var _a, _b;
        const { title, message, okText = "OK", cancelText = "Annuler", onChoice } = options;
        const modalContainer = document.createElement("div");
        modalContainer.className = "modal-custom hidden";
        const modalContent = document.createElement("div");
        modalContent.className = "modal-custom-content";
        modalContent.innerHTML = `
            <button class="modal-close-x" data-close>X</button>
            <div class="modal-content-without-x">
                <h2>${title}</h2>
                <p>${message}</p>
                <div class="modal-buttons">
                    <button class="modal-ok">${okText}</button>
                    <button class="modal-cancel">${cancelText}</button>
                </div>
            </div>
        `;
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);
        super(modalContainer);
        (_a = modalContent.querySelector(".modal-ok")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            onChoice === null || onChoice === void 0 ? void 0 : onChoice(true);
            this.close();
        });
        (_b = modalContent.querySelector(".modal-cancel")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            onChoice === null || onChoice === void 0 ? void 0 : onChoice(false);
            this.close();
        });
        modalContent.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", () => {
            onChoice === null || onChoice === void 0 ? void 0 : onChoice(false);
            this.close();
        }));
    }
}
