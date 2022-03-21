const SignUp = () => {
    return ( 
        <div className="flex flex-col items-center justify-center font-serif ">
            <div className="font-extrabold text-[30px]">
                Create an account
            </div>
            <form>
                <div className="grid gap-5 grid-cols-2">
                    <div className="text-[12px]">
                        <div>First name</div>
                        <input type="text" className="rounded-sm border-0 bg-[#E0E0E0]"/>
                    </div>
                    <div className="text-[12px]">
                        <div>Last name</div>
                        <input type="text" className="rounded-sm border-0 bg-[#E0E0E0]"/>
                    </div>
                    <div className="text-[12px]">
                        <div>Phone No</div>
                        <input type="tel" className="rounded-sm border-0 bg-[#E0E0E0]"/>
                    </div>
                    <div className="text-[12px]">
                        <div>Email</div>
                        <input type="email" className="rounded-sm border-0 bg-[#E0E0E0]"/>
                    </div>
                    <div className="text-[12px]">
                        <div>Password</div>
                        <input type="text" className="rounded-sm border-0 bg-[#E0E0E0]"/>
                    </div>
                    <div className="text-[12px]">
                        <div>Confirm password</div>
                        <input type="text" className="rounded-sm border-0 bg-[#E0E0E0]"/>
                    </div>
                </div>
                
                
            </form>
            <button>
                Create Account
            </button>
        </div>
    );
}
 
export default SignUp;