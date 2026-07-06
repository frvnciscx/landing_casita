/** Fila de 5 estrellas de calificación (soporta medias estrellas). */
export default function Stars({ rating }: { rating: number }) {
  const estrellas = [];
  for (let i = 1; i <= 5; i++) {
    let icono = "star";
    let clase = "material-symbols-outlined text-[16px]";
    if (rating >= i) {
      icono = "star";
    } else if (rating >= i - 0.5) {
      icono = "star_half";
    } else {
      icono = "star";
      clase += " text-black/20 dark:text-white/25";
    }
    estrellas.push(
      <span key={i} className={clase} aria-hidden="true">
        {icono}
      </span>,
    );
  }
  return <span className="flex items-center text-amber-400">{estrellas}</span>;
}
