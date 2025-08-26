import './globals.css'

export const metadata = {
  title: 'Biblical Counselor Reflection Cascade',
  description: 'AI-assisted case reflection tool for Christian counselors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
