import { cva } from "class-variance-authority"; // Uvoz CVA
import { ButtonHTMLAttributes } from "react"; // Za HTML atribute dugmeta

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary"; // Tipovi za `variant`
} & ButtonHTMLAttributes<HTMLButtonElement>; // Omogućava HTML atribute poput `onClick`

// Klase za dugme
const classes = cva(
  "text-xs rounded-lg tracking-widest uppercase font-bold h-10 px-6", // Osnovne klase
  {
    variants: {
      variant: {
        //primary: "text-gray-200 bg-red-800 hover:bg-red-900",
        secondary: "bg-gray-100 text-gray-950 hover:bg-gray-200",
        tertiary: "bg-red-300 bg-gray-800 hover:bg-gray-900",
      },
    },
    defaultVariants: {
      variant: "tertiary", // Podrazumevani stil
    },
  }
);

// `Button` komponenta
export const Button = ({ variant, className = "", children, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={classes({ variant, className })} // Koristi CVA za klase
      {...otherProps} // Prosleđivanje ostalih atributa (poput `onClick`)
    >
      {children}
    </button>
  );
};

export default Button;
