import { tw } from 'twind';

interface IInput {
  type?: 'string' | 'email' | 'number' | 'area';
  label: string;
  name: string;
}

const Button = ({ type = `string`, label, name, ...rest }: IInput) => (
  <div className={tw(`flex flex-col`)}>
    <label htmlFor={name} className={tw(`text-left text-gray-700 text-sm`)}>
      {label}
    </label>
    <input id={name} type={type} className={tw(`form-input p-1 mb-4 border rounded block w-full`)} {...rest} />
  </div>
);

export default Button;
