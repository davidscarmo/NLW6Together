import { ButtonHTMLAttributes } from "react"; // import all html button attributes 
import '../styles/button.scss';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return <button className="button" {...props} />
    

};
