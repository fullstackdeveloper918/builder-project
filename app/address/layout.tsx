import Footer from "@/components/footer/Footer";
import PrimaryHeader from "@/components/primary-header/PrimaryHeader";
import SecondaryHeader from "@/components/secondary-header/SecondaryHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      {children}
      <Footer />
    </>
  );
}
