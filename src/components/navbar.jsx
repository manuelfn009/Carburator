export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
              <div class="flex items-center space-x-2">                
                <img src="./src/assets/CFT.png" alt="Carburator Logo" className="h-10 w-10" />
                <a href="/" className="text-white px-2 text-xl font-semibold">               
                    Carburator
                </a> 
                </div>
                
                <div className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
            <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
        </div>
    </nav>
  );
}
