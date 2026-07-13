interface IProps {
  header: string;
  title: string;
  summary: string;
  headingTag?: "h1" | "h2" | "h3" | "h4";
}

export default function SectionTitle({
  header,
  title,
  summary,
  headingTag: Tag = "h2",
}: IProps) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-3" aria-hidden="true">
        <div className="from-primary to-primary/60 h-1 w-12 rounded-full bg-linear-to-r" />
        <span className="text-primary text-sm font-medium tracking-wider uppercase">
          {header}
        </span>
      </div>

      <Tag className="from-foreground via-foreground/90 to-foreground/60 mb-4 bg-linear-to-r bg-clip-text text-4xl leading-tight font-bold text-transparent 2xl:text-6xl tracking-tight">
        {title}
      </Tag>

      <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
        {summary}
      </p>
    </div>
  );
}
