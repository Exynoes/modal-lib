import { ModalAlert, ModalConfirm, ModalAjax, ModalCustom } from "https://cdn.jsdelivr.net/gh/Exynoes/modal-lib/dist/index.js";

        document.getElementById("testAlert").addEventListener("click", () => {
            new ModalAlert({
                title: "Alert",
                message: "La librairie fonctionne !",
                okText: "OK",
                onOk: () => console.log("OK pressé")
            }).open();
        });

        document.getElementById("testConfirm").addEventListener("click", () => {
            new ModalConfirm({
                title: "Confirm",
                message: "Voulez-vous continuer ?",
                okText: "Oui",
                cancelText: "Non",
                onChoice: (confirmed) => console.log("Utilisateur a cliqué", confirmed ? "Oui" : "Non")
            }).open();
        });