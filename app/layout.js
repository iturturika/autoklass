import './globals.scss';

export const metadata = {
  title: "AutoKlass",
  description: "Автошкола в Бельцах",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
