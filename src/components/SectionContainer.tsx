export default function SectionContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-section-padding ${className}`}>
      <div className="max-w-container-max mx-auto px-gutter">{children}</div>
    </section>
  );
}
