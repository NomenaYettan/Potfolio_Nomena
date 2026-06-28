import useReveal from "../hooks/useReveal";

/**
 * Enveloppe son contenu et applique un fade-up doux
 * lorsque l'élément entre dans le viewport.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
