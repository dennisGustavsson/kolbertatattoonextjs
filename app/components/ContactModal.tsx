"use client";
import React, { useEffect } from "react";
// import "../styles/contactmodal.scss";

const ContactModal: React.FC = () => {
  useEffect(() => {
    const openBtn = document.getElementById("openContactModal");
    const modal = document.getElementById("contactModal");
    const closeBtn = document.getElementById("closeContactModal");
    if (!openBtn || !modal || !closeBtn) return;

    const openModal = () => modal.classList.remove("d-none");
    const closeModal = () => modal.classList.add("d-none");

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    const modalClickHandler = (e: MouseEvent) => {
      if (e.target === modal) closeModal();
    };
    modal.addEventListener("click", modalClickHandler);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !modal.classList.contains("d-none")) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      openBtn.removeEventListener("click", openModal);
      closeBtn.removeEventListener("click", closeModal);
      modal.removeEventListener("click", modalClickHandler);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      id="contactModal"
      className="modal-overlay d-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contactModalTitle"
    >
      <div className="modal-content bg-white rounded shadow-lg position-relative text-start p-6">
        <h2 id="contactModalTitle" className="mb-3 font-bold text-center">
          Innan du kontaktar mig
        </h2>
        <p className="mb-4">
          Läs detta innan du mejlar – det hjälper dig få snabbare svar:
        </p>
        <h5 className="mt-4 font-bold">📧 Hur du kontaktar mig:</h5>
        <ul className="small mb-4">
          <li>
            Jag svarar normalt inom 1–7 dagar – skicka igen efter 10 dagar om du
            inte fått svar.
          </li>
          <li>Du når mig via e-post.</li>
          <li>
            Vill du prata i person? Skicka ett meddelande så får du veta när jag
            är i studion.
          </li>
        </ul>
        <h5 className="mt-4 font-bold">
          📌 Vad du ska skicka med i ditt meddelande:
        </h5>
        <ul className="small mb-4">
          <li>Motiv</li>
          <li>Placering</li>
          <li>Färg eller gråskala</li>
          <li>Referensbilder</li>
          <li>Om du vill tatuera dig i Örebro eller i aktuell gäststudio</li>
          <li>Vilka dagar som passar dig</li>
          <li>Eventuella frågor</li>
        </ul>
        <h5 className="mt-3 font-bold">⏳ Väntetid:</h5>
        <ul className="small mb-3">
          <li>Oftast finns tid inom några veckor.</li>
        </ul>
        <h5 className="mt-3 font-bold">💰 Priser (cirka):</h5>
        <ul className="small mb-3">
          <li>Minimum: 1500 kr</li>
          <li>3 timmar: 3000 kr</li>
          <li>Heldag: 6000 kr</li>
          <li>Exakt pris ges efter tatueringen är klar.</li>
          <li>Betalning med kontanter, swish eller kort.</li>
        </ul>
        <h5 className="mt-3 font-bold">📅 Bokning & avbokning:</h5>
        <ul className="small mb-3">
          <li>Boka via mail eller direkt i studion.</li>
          <li>Avboka i god tid. Uteblivna tider debiteras.</li>
          <li>
            Se till att du kan vara ledig och har ekonomi för din tid innan du
            bokar.
          </li>
        </ul>
        <h5 className="mt-3 font-bold">🎨 Design:</h5>
        <ul className="small mb-4">
          <li>
            Fundera noga – tatueringar är permanenta, trender är inte det.
          </li>
          <li>Skicka gärna flera referensbilder.</li>
          <li>Kolla min stil på Instagram/Facebook innan du bokar.</li>
          <li>Design sker först efter att du har bokat.</li>
        </ul>

        <div className="grid place-content-center">
          <a href="mailto:kolbertatattoo@gmail.com" className="btn btn-theme">
            Jag förstår – Mejla nu
          </a>
        </div>
        <button
          id="closeContactModal"
          className="lightbox-btn lightbox-btn-close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
