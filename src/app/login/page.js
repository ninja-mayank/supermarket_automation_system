"use client"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import { useForm,SubmitHandler } from "react-hook-form";

const manager_email = "Mayank@gmail.com"

const Login = () => {
    const {register , handleSubmit, setError, formState: {errors,isSubmitting}} = useForm();
    const router = useRouter()
    const onSubmit = async(data) => {
        try{
            const handleLogin = await signIn('credentials',{
                email: data.email,
                password: data.password,
                redirect: false,
            })
            if(!handleLogin?.error){
                if(data.email != manager_email){
                    localStorage.setItem('role','employee')
                    router.push('/employee')
                }else{
                    localStorage.setItem('role','manager')
                    router.push('/manager')
                }
            }else{
                setError("root",{
                    message: "Invalid credentials"
                })
            }
        }
        catch(error){
            console.log(error)
        }
    }
    return ( 
        <div>
            <nav class="bg-transparent absolute w-full z-10 top-0">
                <div class="container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div class="pl-4 flex items-center">
                        <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"  href="#">
                            Supermarket Automation System
                        </a>
                    </div>
                    <div class="block lg:hidden pr-4">
                        <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
                            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-gray-900 p-4 lg:p-0 z-20" id="nav-content">
                        <ul class="list-reset lg:flex justify-end flex-1 items-center">
                            <li class="mr-3">
                                <a class="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="/">Home</a>
                            </li>
                            <li class="mr-3">
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="/about">About</a>
                            </li>
                            <li class="mr-3">
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="/contact">Contact</a>
                            </li>
                            <li class="mr-3">
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="bg-transparent">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-black-900">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Login Page
                </a>
                <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                                <input type="text" name="name" id="name" className="bg-white-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" {...register("name",{
                                    required:"Name is required",
                                })} />
                                {errors.name && (
                                    <div className="text-red-500">{errors.name.message}</div>
                                )}
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-white-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" {...register("email",{
                                    required:"Email is required",
                                    validate: (value) => {
                                        if(!value.includes("@")){
                                            return "Email must include @"
                                        }
                                        return true
                                    }
                                })} />
                                {errors.email && (
                                    <div className="text-red-500">{errors.email.message}</div>
                                )}
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" {...register("password",{
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have atleast 8 characters"
                                    }
                                })}/>
                                {errors.password && (
                                    <div className="text-red-500">{errors.password.message}</div>
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-black bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={isSubmitting}>
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                            {errors.root && (
                                <div className="text-red-500 text-center">{errors.root.message}</div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}
 
export default Login;