import landing from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"

const HomePage = () => {
  return(
    <div className="flex flex-col gap-12 ">
        <div className="bg-gray-300 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-500">
                Tuck into a Takeaway today!
            </h1>
            <span className="text-2xl">Food is just a click awaay</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landing} alt="" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order takeway even faster
                </span>
                <span >
                    Download the merneats app
                </span>
                <img src={appDownload} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomePage;