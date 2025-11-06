'use server'

import { z, ZodError } from 'zod'
import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

type State = {
  message: string
  fieldErrors?: Record<string, string>
}

const registerSchema = z.object({
  username: z.string().min(3, 'نام باید حداقل ۳ کاراکتر باشد'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
})

export default async function CreateUser(prevState: State, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  try {
    const result = registerSchema.parse({ username, password })

    const response = await fetch('https://api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    })

    if (!response.ok) {
      return { message: '❌ خطا در ثبت‌نام' }
    }

    const data = await response.json()
        // 👇 ذخیره توکن دریافتی کاربر در کوکی
    if (data?.token) {
      (await cookies()).set('token', data.token, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 1 روز
      })
    }
    return { message: '✅ ثبت‌نام با موفقیت انجام شد', data }
  } catch (err) {
  if (err instanceof ZodError) {
    const fieldErrors: Record<string, string> = {}

    err.issues.forEach((issue) => {
      const key = issue.path?.[0]
      if (key && typeof key !== 'number') {
        fieldErrors[String(key)] = issue.message
      }
    })

    return {
      message: '⚠️ لطفاً خطاهای موجود را برطرف کنید',
      fieldErrors,
    }
  }

    console.error(err)
    return { message: '⚠️ مشکلی در ارتباط با سرور پیش آمد' }
    // redirect(/)
  }
}
