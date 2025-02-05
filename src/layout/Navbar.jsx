const Navbar = () => {
    return (
        <header className="bg-gray-900 text-white h-screen flex flex-col justify-between">
  <nav className="flex justify-between items-center px-8 py-4">
    <div className="text-2xl font-semibold">Logo</div>
    <ul className="flex space-x-8">
      <li><a href="#product" className="hover:text-gray-400">Product</a></li>
      <li><a href="#company" className="hover:text-gray-400">Company</a></li>
      <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
    </ul>
  </nav>
  

  <div className="flex-grow flex items-center justify-center text-center px-6">
    <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
    <p className="mt-4 text-lg">Your solution for everything you need</p>
  </div>
</header>

    )
}

export default Navbar