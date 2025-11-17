export class BaseModal {
    constructor(modalElement) {
        this.previouslyFocused = null;
        this.modal = modalElement;
        this.modal.addEventListener("click", e => {
            if (e.target === this.modal)
                this.close();
        });
    }
    open() {
        this.previouslyFocused = document.activeElement;
        this.modal.setAttribute("aria-hidden", "false");
        this.modal.classList.remove("hidden");
        this.modal.classList.add("show");
        const firstFocusable = this.modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
        firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.focus();
        this.escHandler = (e) => {
            if (e.key === "Escape")
                this.close();
        };
        this.trapFocusHandler = (e) => {
            if (e.key !== "Tab")
                return;
            const focusables = Array.from(this.modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"));
            if (!focusables.length)
                return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
            else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener("keydown", this.escHandler);
        document.addEventListener("keydown", this.trapFocusHandler);
    }
    close() {
        var _a;
        this.modal.setAttribute("aria-hidden", "true");
        this.modal.classList.remove("show");
        this.modal.classList.add("hidden");
        document.removeEventListener("keydown", this.escHandler);
        document.removeEventListener("keydown", this.trapFocusHandler);
        (_a = this.previouslyFocused) === null || _a === void 0 ? void 0 : _a.focus();
    }
}
