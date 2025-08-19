import { Navbar, Footer } from '@/components';

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/* Hero/Header Section for Breadcrumb */}
      <section className="relative text-slate-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center justify-center">
          <nav className="flex justify-center mb-0" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
              <li>
                <a href="/" className="hover:underline text-slate-600">Home</a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Kontakt</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {children}
      <Footer />
    </>
  );
}
