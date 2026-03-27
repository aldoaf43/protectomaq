import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import LeadMagnet from "@/components/LeadMagnet";
import { FormPayload, PageSection } from "@/types/sanity";

interface SectionSwitcherProps {
  section: PageSection;
  form: FormPayload;
}

export default function SectionSwitcher({ section, form }: SectionSwitcherProps) {
  switch (section._type) {
    case "hero":
      return <Hero data={section} />;
    case "solutionsSection":
      return <Solutions data={section} />;
    case "leadMagnet":
      return <LeadMagnet data={section} form={form}/>;
    default:
      return (
        <div className="py-20 text-center text-zinc-500">
          Unknown section type: {section}
        </div>
      );
  }
}
