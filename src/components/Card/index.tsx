import { CardType } from "../types";

export const Card = ({ children, className, ...rest }: CardType) => {
  const cardClassName = `bg-white p-4 rounded-lg shadow-sm ${className ?? ""}`;

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
