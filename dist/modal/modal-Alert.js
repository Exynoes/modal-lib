import { BaseModal } from "./modal-BaseModal.js";
export class ModalAlert extends BaseModal {
    constructor(options) {
        var _a;
        const { title, message, okText = "OK", onOk } = options;
        const modalContainer = document.createElement("div");
        modalContainer.className = "modal-custom hidden";
        const modalContent = document.createElement("div");
        modalContent.className = "modal-custom-content";
        modalContent.innerHTML = `
            <button class="modal-close-x" data-close>X</button>
            <div class="modal-content-without-x">
                <h2>${title}</h2>
                <p>${message}</p>
                <button class="modal-ok">${okText}</button>
            </div>
        `;
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);
        super(modalContainer);
        this.onOk = onOk;
        (_a = modalContent.querySelector(".modal-ok")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a;
            (_a = this.onOk) === null || _a === void 0 ? void 0 : _a.call(this);
            this.close();
        });
        modalContent.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", () => this.close()));
    }
}
