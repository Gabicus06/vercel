import Link from "next/link";

interface IButton {
  children: React.ReactNode
  classname?: string;
  variant?: "quarternary" | "quinary" | "tertiary"
  onClick?: ()=> void
  href?: string
  type?: "submit" | "reset" | "button"
}

const button = ({
  children, 
  classname = '',
  variant= "quinary",
  onClick,
  href = "",
  type = "button",
}:IButton) => {
  return (
    <Link href={href}>
      <button className= {`p-3 border-1 rounded transition-all font-bold bg-${variant}
        hover:scale-105 active:scale-95 ${classname}`}
        onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  )
}

export default button