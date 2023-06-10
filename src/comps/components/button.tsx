import classNames from "classnames";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  children,
  as,
  href,
  onClick,
  variant,
}) => {
  const Tag = as ? as : 'button';

  const variants = {
    primary: 'text-white bg-none border-1 border-white',
    secondary: 'text-black bg-sun',
  };

  const buttonClassNames = classNames(
    'rounded-[8px] text-16 py-10 px-24 text-center',
    'disabled:pointer-events-none',
    variants[variant]
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <Tag className={buttonClassNames} aria-label={children} onClick={onClick}>
          {children}
        </Tag>
      </Link>
    );
  } else {
    return (
      <Tag className={buttonClassNames} aria-label={children} onClick={onClick}>
        {children}
      </Tag>
    );
  }
};

export default Button;
