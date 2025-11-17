var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseModal } from "./modal-BaseModal.js";
export class ModalAjax extends BaseModal {
    constructor(url) {
        const modalContainer = document.createElement("div");
        modalContainer.className = "modal-custom hidden";
        const content = document.createElement("div");
        content.className = "modal-custom-content";
        content.innerHTML = `
        <button class="modal-close-x" data-close>X</button>
            <div class="modal-content-without-x">
                <div class="ajax-container">
                    <p>Chargement...</p>
                </div>
            <button onclick="this.closest('.modal-custom')?.remove()">Fermer</button>
        </div>
        `;
        modalContainer.appendChild(content);
        document.body.appendChild(modalContainer);
        super(modalContainer);
        content.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", () => this.close()));
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(url);
                if (!res.ok)
                    throw new Error("Erreur de chargement");
                const html = yield res.text();
                const ajaxZone = content.querySelector(".ajax-container");
                if (ajaxZone) {
                    ajaxZone.innerHTML = html;
                }
                content.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", () => this.close()));
            }
            catch (err) {
                content.innerHTML = `<p style="color:red;">Erreur : ${err.message}</p>`;
            }
        }))();
    }
}
