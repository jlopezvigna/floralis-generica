import { tw } from 'twind';

interface ITextArea {
  label: string;
  name: string;
}

const Textarea = ({ label, name, ...rest }: ITextArea) => (
  <div className={tw(`flex flex-col`)}>
    <label htmlFor={name} className={tw(`text-left text-gray-700 text-sm`)}>
      {label}
    </label>
    <textarea id={name} className={tw(`form-input p-1 mb-4 border rounded block w-full`)} {...rest} />
  </div>
);

export default Textarea;
