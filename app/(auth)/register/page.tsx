export default function HomePage() {
    return (
        <section className="flex-row-center min-h-screen relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-80 h-80 blur-2xl flex-row-center bg-[#006266] opacity-20 rounded-full"></div>
            <div className="bg-white p-7 rounded shadow">
                <form className="flex flex-col justify-center gap-2">
                    <legend className="font-semibold text-lg">ورود به مستر وحید</legend>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">نام و نام خانوادگی:</label>
                        <input 
                        type="text" placeholder="نام و نام خانوادگی" className="border-2 border-gray-200 outline-none p-2 rounded-md w-full hover:border-[#006266]"/>
                       
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">رمز عبور:</label>
                        <input
                        type="password" placeholder="رمز عبور" className="border-2 border-gray-200 outline-none p-2 rounded-md w-full hover:border-[#006266]"/>
               
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
