import { useState } from 'react';
import { InputProps } from '../utils/interface';
import EyeOpen from '@/assets/icons/eye-open';
import CloseEye from '@/assets/icons/close-eye';


const HomeInput = ({
  type,
  placeholder,
  label,
  onChange,
  value,
  name,
  border,
  onKeyPress,
  readOnly,
  borderRadius,
  width
}: InputProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setVisible(!visible);
  };
  return (
    <div className='w-full'>
      <h3 className='text-[#1E1E1E] text-[13px] font-roboto mb-2'>{label}</h3>
      <div className='relative items-center'>
        <input
          type={visible ? 'text' : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          style={{ borderRadius: borderRadius, width: width}}
          className={`h-[45px] w-full  border-solid border-[1px] border-[#E8ECEF] ${border} rounded-[2px] outline-none px-4 placeholder-[#98A9BC] placeholder:text-[14px] placeholder:font-[400]`}
        />
        {type === 'password' && (
          <div
            className='absolute cursor-pointer top-3 right-2'
            onClick={handleTogglePassword}
          >
            {visible ? <EyeOpen/> : <CloseEye/>}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeInput;