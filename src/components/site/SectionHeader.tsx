export function SectionHeader({ id, eyebrow, title, description }: { id?: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-xs text-primary">
        <span className="text-muted-foreground">$</span> {eyebrow}
      </div>
      <h2 id={id} className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}