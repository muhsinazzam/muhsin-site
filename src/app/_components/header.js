export default function Header(){
    return(
    <header class="bg-gray-400">
        <nav class="mx-auto flex -w-7xl items-center justify-between p-5 lg:px-8" aria-label="Global">
            <div className="flex flex-col items-center">
                <img class="h-7 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                <h1 class="h-6 w-auto text-sm font-semibold leading-2 text-gray-900">Muhsin Site</h1>
            </div>
            <div class="hidden lg:flex lg:w-7/12 lg:gap-x-12">
                <a href="#" class="text-sm font-semibold leading-2 text-gray-900">Skills</a>
                <a href="#" class="text-sm font-semibold leading-2 text-gray-900">Certification</a>
                <a href="#" class="text-sm font-semibold leading-2 text-gray-900">About</a>
                <a href="#" class="text-sm font-semibold leading-2 text-gray-900">Contact</a>
            </div>
        </nav>
        <div class='lg:hidden' role="dialog" aria-modal='true'>
            <div class='fixed inset-0 z-50'></div>
            <div class='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div class='flex items-center justify-between'>
                <h1 class="h-8 w-auto text-sm font-semibold leading-6 text-gray-900">Muhsin Site</h1>
            </div>
            </div>
            <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
          </div>
        </div>
    </header>
    );
}