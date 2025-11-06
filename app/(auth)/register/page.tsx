'use client'

import { useActionState } from "react"
import { SubmitButton } from "@/src/components/shared/SubmitBtn/SubmitButton"
import CreateUser from "@/src/services/register/action"

export default function RegisterPage() {
  const initialState = { message: '', fieldErrors: {} }
  const [state, formAction] = useActionState(CreateUser, initialState)

  return (
    <section className="flex-row-center min-h-screen relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-80 h-80 blur-2xl flex-row-center bg-[#006266] opacity-20 rounded-full"></div>
      <div className="bg-white p-7 rounded shadow w-80">
        <form action={formAction} className="flex flex-col gap-3">
          <legend className="font-semibold text-lg text-center">ثبت‌نام</legend>

          {/* username */}
          <div className="flex flex-col gap-1">
            <label>نام و نام خانوادگی:</label>
            <input
              type="text"
              name="username"
              placeholder="نام و نام خانوادگی"
              className={`border-2 p-2 rounded-md outline-none w-full 
                ${state.fieldErrors?.username ? 'border-red-400' : 'border-gray-200 hover:border-[#006266]'}`}
            />
            {state.fieldErrors?.username && (
              <p className="text-red-500 text-sm">{state.fieldErrors.username}</p>
            )}
          </div>

          {/* password */}
          <div className="flex flex-col gap-1">
            <label>رمز عبور:</label>
            <input
              type="password"
              name="password"
              placeholder="رمز عبور"
              className={`border-2 p-2 rounded-md outline-none w-full 
                ${state.fieldErrors?.password ? 'border-red-400' : 'border-gray-200 hover:border-[#006266]'}`}
            />
            {state.fieldErrors?.password && (
              <p className="text-red-500 text-sm">{state.fieldErrors.password}</p>
            )}
          </div>

          {/* message */}
          {state.message && (
            <p className="text-sm text-gray-700 text-center">{state.message}</p>
          )}

          <SubmitButton />
        </form>
      </div>
      <div className="absolute -bottom-16 -left-16 w-80 h-80 blur-2xl flex-row-center bg-[#006266] opacity-20 rounded-full"></div>
    </section>
  )
}
