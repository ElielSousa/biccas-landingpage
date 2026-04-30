import styled from "styled-components";

const StyledGradientBackground = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary + "10"} 0%,
    ${({ theme }) => theme.colors.white} 50%,
    ${({ theme }) => theme.colors.primary + "10"} 100%
  );
  margin: 0;
`;

export default StyledGradientBackground;
