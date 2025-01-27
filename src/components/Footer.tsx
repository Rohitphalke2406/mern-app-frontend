const Footer = () => {
  return(
    <div className="bg-green-500 py-5 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
            <span className="text-3xl text-white tracking-tight">
                FoodieExpress
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Services</span>
            </span>
        </div>
    </div>
  )
}

export default Footer;