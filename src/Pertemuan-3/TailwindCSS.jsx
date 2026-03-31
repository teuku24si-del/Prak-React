export default function TailwindCSS(){
    return (
        <div>
            <FlexboxGrid/>
            <CardGrid/>
            <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-blue-500 text-white
                                px-4 py-2 mx-4 rounded
                                shadow-lg">Click Me</button>
            <Spacing
            title="Judul kartu"
            content="Ini adalah contoh penggunaan padding dan margin di Tailwind." />
            <Typography/>
            <BorderRadius/>
            <BackgroundColors/>
            <ShadowEffects/>
            
        </div>
    )
}

function Spacing(props){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="ml-4">
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="m-4 border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="m-4 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function CardGrid() {
    const items = [
        { title: "Ultra Fast", desc: "Engineered for speed and optimized performance.", icon: "⚡" },
        { title: "Modern UI", desc: "Crafting beautiful interfaces with ease.", icon: "🎨" },
        { title: "Responsive", desc: "Adaptive layouts for every single device screen.", icon: "📱" },
        { title: "Dark Mode", desc: "Elegant aesthetics designed for the night owls.", icon: "🌙" },
        { title: "Customizable", desc: "Tailor every detail to fit your brand identity.", icon: "⚙️" },
        { title: "Production Ready", desc: "Battle-tested components for your next big app.", icon: "🚀" }
    ];

    return (
        <div className="bg-black p-8">
            {/* Judul kecil sebagai pemanis di atas Grid */}
            <p className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-4 text-center">Features</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative bg-gray-900 border border-gray-800 p-6 rounded-2xl 
                                   transition-all duration-500 hover:border-blue-500/50 
                                   hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] cursor-pointer"
                    >
                        {/* Aksen hiasan sudut (opsional untuk kesan futuristik) */}
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="text-2xl">{item.icon}</span>
                        </div>

                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                        </h4>
                        
                        <p className="mt-3 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                            {item.desc}
                        </p>

                        {/* Garis bawah tipis yang memanjang saat hover */}
                        <div className="mt-4 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

