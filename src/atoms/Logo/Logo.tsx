import Title from "./Logo.styles";

const Logo = ({ children, }: { children: React.ReactNode; }) => {
  return (
    <Title>{children}</Title>
  );
};

export default Logo;