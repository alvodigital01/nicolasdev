export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/55SEU_NUMERO_AQUI?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20meu%20site"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-fab fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(59,130,246,0.3)] bg-[rgba(10,15,26,0.6)] text-accentSoft shadow-[0_18px_40px_-24px_rgba(59,130,246,0.55)] backdrop-blur-[16px] transition duration-300 hover:-translate-y-1 hover:bg-[rgba(17,25,39,0.82)] hover:shadow-[0_0_28px_rgba(126,192,255,0.28),0_24px_50px_-24px_rgba(59,130,246,0.72)] sm:bottom-8 sm:right-8"
    >
      {/* Substitua SEU_NUMERO_AQUI pelo número do WhatsApp com DDI e DDD. */}
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.45 0-9.89 4.43-9.89 9.88 0 1.74.46 3.45 1.32 4.95L2 22l5.31-1.39a9.9 9.9 0 0 0 4.72 1.2h.01c5.45 0 9.88-4.43 9.88-9.88a9.8 9.8 0 0 0-2.87-7.02Zm-7.02 15.23h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.15.83.84-3.07-.2-.31a8.23 8.23 0 0 1-1.27-4.37c0-4.56 3.72-8.28 8.3-8.28 2.21 0 4.29.86 5.85 2.42a8.2 8.2 0 0 1 2.42 5.86c0 4.57-3.72 8.28-8.25 8.28Zm4.54-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24a7.6 7.6 0 0 1-1.4-1.74c-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.36-.78-1.86-.21-.5-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
      </svg>
    </a>
  );
}