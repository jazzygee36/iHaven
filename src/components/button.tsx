import { ButtonProps } from "@/utils/interface";

const HomeButton = ({
  title,
  onClick,
  type ,
  bg,
  width,
  color,
  icon,
  height,
  borderRadius,
  border,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={{
        backgroundColor: bg,
        width: width,
        color: color,
        height: height,
        border: border,
        borderRadius: borderRadius,
      }}
      className=" text-white px-4  rounded-md cursor-pointer text-[16px] md:text-[16px] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
    >
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </button>
  );
};

export default HomeButton;
