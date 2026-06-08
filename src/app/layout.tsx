// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-900 text-white p-4">
          <div className="container mx-auto flex gap-6">
            <a href="/" className="hover:text-orange-300">Home</a>
            <a href="/flights" className="hover:text-orange-300">Flights</a>
            <a href="/hotels" className="hover:text-orange-300">Hotels</a>
            <a href="/cars" className="hover:text-orange-300">Cars</a>
            <a href="/destinations" className="hover:text-orange-300">Destinations</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
