'use client'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerAction } from "@/src/services/register.service"

const schema = z.object({
    username: z.string().min(8, 'نام و نام خانوادگی باید حداقل ۸ کاراکتر باشد'),
    password: z.string().min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
})

type formData = z.infer<typeof schema>

export default function HomePage() {

    const { handleSubmit, register, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: formData) => {
        try{
            await registerAction(data)
            console.log('User registered successfully!')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <section className="flex-row-center min-h-screen relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-80 h-80 blur-2xl flex-row-center bg-[#006266] opacity-20 rounded-full"></div>
            <div className="bg-white p-7 rounded shadow">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-2">
                    <legend className="font-semibold text-lg">ورود به مستر وحید</legend>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">نام و نام خانوادگی:</label>
                        <input {...register('username')}
                        type="text" placeholder="نام و نام خانوادگی" className="border-2 border-gray-200 outline-none p-2 rounded-md w-full hover:border-[#006266]"/>
                        {errors.username && (<span className="text-red-700">{errors.username.message}</span>)}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">رمز عبور:</label>
                        <input {...register('password')}
                        type="password" placeholder="رمز عبور" className="border-2 border-gray-200 outline-none p-2 rounded-md w-full hover:border-[#006266]"/>
                        {errors.password && (<span className="text-red-700">{errors.password.message}</span>)}
                    </div>
                    <div className="flex-row-center">
                        <button className="bg-[#006266] border border-[#006266] text-white rounded py-2.5 w-full cursor-pointer">ورود</button>
                    </div>
                    <p className="text-xs text-gray-700">
                        با ورود، شما <span className="text-[#006266]">شرایط و قوانین حریم خصوصی مستر وحید</span> را می‌پذیرید.
                    </p>
                </form>
            </div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 blur-2xl flex-row-center bg-[#006266] opacity-20 rounded-full"></div>
        </section>
    )
}
