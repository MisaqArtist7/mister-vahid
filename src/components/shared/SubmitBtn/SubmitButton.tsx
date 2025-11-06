'use client'
import { useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  label?: string        
  pendingLabel?: string 
  className?: string    
}

export function SubmitButton({
  label = 'ارسال',
  pendingLabel = 'در حال ارسال...',
  className = '',
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-[#006266] border border-[#006266] text-white rounded py-2.5 w-full cursor-pointer ${className}`}
    >
      {pending ? pendingLabel : label}
    </button>
  )
}
