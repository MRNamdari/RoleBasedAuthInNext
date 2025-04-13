export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto min-h-full min-w-full place-self-center *:font-[family-name:var(--font-geist-sans)] grid md:grid-cols-[auto_1fr] grid-rows-[1fr_auto]">
      {children}
    </main>
  );
}
