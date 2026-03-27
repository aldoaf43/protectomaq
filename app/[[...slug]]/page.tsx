import { notFound } from "next/navigation";
import { getPage, getSettings } from "@/lib/sanity/fetch";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSwitcher from "@/components/SectionSwitcher";
import { Metadata } from "next";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug?: string[] }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const pageSlug = slug?.join("/") || null;
  const data = await getPage(pageSlug);

  if (!data?.seo) return {};

  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
  };
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug?: string[] }> 
}) {
  const { slug } = await params;
  const pageSlug = slug?.join("/") || null;

  const [data, settings] = await Promise.all([
    getPage(pageSlug),
    getSettings()
  ]);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar navigation={settings?.mainNavigation} logo={settings?.logo} />
      {data.sections?.map((section) => (
        <SectionSwitcher key={section._key} section={section} form={data.formDialog!} />
      ))}
      <Footer data={settings?.footer} />
    </main>
  );
}

