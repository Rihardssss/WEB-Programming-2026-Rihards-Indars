interface FooterProps {
  note: string;
}

function Footer({ note }: FooterProps) {
  return (
    <footer className="border-t border-app-line bg-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-2 px-3.5 py-[18px] text-[11px] text-app-muted sm:min-h-[74px] sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-5 sm:py-0">
        <span>CampusFlow · Web Programming</span>
        <span>{note}</span>
      </div>
    </footer>
  );
}

export default Footer;
