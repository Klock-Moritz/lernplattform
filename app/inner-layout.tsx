import { Layout } from "@/stories/Layout";
import { getTranslations } from "next-intl/server";

export default function InnerLayout(translationKey: string, currentStep: number,
  sideContentPlacement: "left" | "top" = "left"
) {
  return async function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const t = await getTranslations(translationKey);
  
    return (
      <Layout title={t("title")} stepCount={4} currentStep={currentStep}
        sideContent={t("sideContent")} sideContentPlacement={sideContentPlacement}>
        {children}
      </Layout>
    )
  }
}