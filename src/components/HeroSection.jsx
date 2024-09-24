import "../assets/css/herosection.css";

function HeroSection ({title, secondTitle, showSearchbar}) {
    return <>
    <div className="hero bg-green-gradient h-52 relative">
        <div className="text-left">
            <div className="max-w-lg sm:pl-20 pl-6">
                <h1 className="text-4xl">{title}</h1>
                {secondTitle && <h2 className="text-2xl py-2"><i class="fa-solid fa-location-dot"></i> {secondTitle}</h2>}
            </div>
        </div>
        {showSearchbar && <div className="absolute w-full flex justify-center" style={{ top: 'calc(100% - 20px)' }}>
            <input 
            type="search"
            placeholder="Rechercher un légume"
            className="searchbar shadow-md"
            />
        </div>}
    </div>
    </>
}

export default HeroSection;