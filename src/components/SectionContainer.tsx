export default function SectionContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 md:py-16 lg:py-section-padding ${className}`}>
      <div className="max-w-container-max mx-auto px-4 md:px-gutter">{children}</div>
    </section>
  );
}
