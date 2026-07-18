// Propiedades para el componente
interface HeaderProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

/*function Header(props: HeaderProps) {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.subtitle }</p>
    </header>
  );
}*/

export default Header;
