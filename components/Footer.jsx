export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-auto border-t bg-background p-4 text-center text-sm text-muted-foreground lg:p-6">
            © {currentYear} Soham Datta. All rights reserved.
        </footer>
    )
}

