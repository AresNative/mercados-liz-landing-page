export default function Background({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative isolate overflow-hidden bg-white px-2 py-20 sm:py-24 md:py-28 lg:px-8 min-h-screen">
            {/* Fondo radial responsive */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />

            {/* Sombra y skew responsive */}
            <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            {/* Contenido */}
            <div className="mx-auto max-w-7xl">
                {children}
            </div>
        </main>
    );
}
