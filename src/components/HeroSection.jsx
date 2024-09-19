function HeroSection ({title}) {
    return <div className="hero bg-green-gradient h-52 relative">
        <div className="text-left">
            <div className="max-w-md sm:pl-20 pl-6">
                <h1 className="text-4xl">{title}</h1>
            </div>
        </div>
        <div className="absolute w-full flex justify-center" style={{ top: 'calc(100% - 20px)' }}>
            <input 
            type="search"
            placeholder="Rechercher un légume"
            className="searchbar shadow-md"
            />
        </div>
    </div>
}

export default HeroSection;