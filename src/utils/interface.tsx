export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' ;
  disabled?: boolean;
  className?: string;
  bg: string;
  width: string;
  color?: string;
  icon?: React.ReactNode;
  height:string,
  borderRadius?:string
  border?:string
}

export interface InputProps {
  type: string;
  placeholder: string;
  readOnly?: boolean;
  label?: string;
  name?: string;
  value?: string;
  border?: string;
  width?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  borderRadius?: string;
}


export interface FooterLink {
    label: string;
    href: string;
  }
  
export interface FooterSection {
  title: string;
  links: { label: string; href: string }[] | string;
}

  export interface CompanyInfo {
    tel: string;
    email: string;
    address: string;
    fax: string;
  }
  
 