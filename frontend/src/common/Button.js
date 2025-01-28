import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ variant, children, ...props }) => (
  <BootstrapButton
    variant={variant}
    size="sm"
    className="w-100px"
    {...props}
  >
    {children}
  </BootstrapButton>
);

export default Button;