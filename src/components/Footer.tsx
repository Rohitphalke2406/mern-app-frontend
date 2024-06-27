const Footer = () => {
  return(
    <div className="bg-orange-500 py-7 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
            <span className="text-3xl text-white tracking-tight">
                MernEats.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms OF Services</span>
            </span>
        </div>
    </div>
  )
}

export default Footer;