import { InputHTMLAttributes } from 'react';

interface InputPorps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputPorps) {
  return (
    <input
      {...props}
      
      className="bg-zinc-900 py-3 px-4 rounded text-sm"
    />
  )
}