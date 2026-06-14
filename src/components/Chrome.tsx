import { NAV_SECTIONS } from '../content/propuesta';

export function ProgressBar({ progress }: { progress: number }) {
  return <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />;
}

export function SideNav() {
  return (
    <nav className="nav" aria-label="Secciones">
      {NAV_SECTIONS.map((section) => (
        <a key={section.id} href={`#${section.id}`} title={section.label} aria-label={section.label} />
      ))}
    </nav>
  );
}

export function SiteFooter() {
  return <footer>VÓRTICE — Inteligencia que transforma comunidades.</footer>;
}

export function VorticeLogo() {
  return (
    <div className="logoBox">
      <img src={`${import.meta.env.BASE_URL}logo-svg.svg`} alt="Vórtice" />
    </div>
  );
}
