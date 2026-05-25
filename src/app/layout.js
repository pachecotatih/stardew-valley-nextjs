import "./globals.css";

export const metadata = {
    title: "Stardew Valley NPCs",
    description: "Personagens de Stardew Valley",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body cz-shortcut-listen="true" className="antialiased">
                {children}
            </body>
        </html>
    );
}
