interface FooterProps {
  developer: string;
  version: string;
}

function Footer({ developer, version }: FooterProps) {
  return (
    <footer>
      <hr />
      <p>Desarrollado por: {developer}</p>
      <p>Version: {version}</p>
    </footer>
  );
}

export default Footer;
