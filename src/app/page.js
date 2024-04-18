import "./globals.css";

export default async function Home() {
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
    <div class="container mx-auto flex flex-wrap py-6">
        <section class="w-full flex flex-col items-center px-3">
            <article class="flex flex-col my-4">
                <div class="bg-transparent flex flex-col justify-start p-6 text-center">
                    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Welcome To</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Supermarket Automation System</a>
                    <p class="text-sm pb-3">
                        By <a href="#" class="font-semibold hover:text-gray-800">Author Name</a>, Published on April 5th, 2024
                    </p>
                    <a href="#" class="pb-6">Explore the future of shopping with our cutting-edge supermarket automation solutions. Experience seamless shopping like never before.</a>
                    <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        </section>
    </div>
    <footer class="bg-transparent fixed bottom-0 bg-gray-900 w-full">
        <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div class="w-full mx-auto flex flex-wrap items-center">
                <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
                        © 2024 Supermarket Automation System
                    </a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}
