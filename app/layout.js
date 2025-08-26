export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        {children}
      </body>
    </html>
  )
}
