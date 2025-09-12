
interface GlassButtonInterfave{
    children : React.ReactNode
}

const GlassButton: React.FC<GlassButtonInterfave> = ({ children}) => {
  return (
    <div>
      <button className="
      isolate group relative 
      px-8 py-4 
      font-bold text-white text-lg 
      bg-gradient-to-r from-blue-500 to-cyan-400 
      rounded-lg 
      shadow-xl 
      overflow-hidden 
      transition-all duration-300 ease-out 
      transform hover:scale-105
      cursor-pointer
    ">
      {/* Lapisan Latar Belakang untuk efek kilau */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-out"></span>

      {/* Efek Kaca (Glass Morphism) */}
      <span className="
        absolute inset-0 
        bg-white/20 
        backdrop-blur-md 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-300 ease-out
        border border-white/30
        rounded-lg
      "></span>

      {/* EFEK BARU: Garis cahaya kilat */}
      <span className="absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out delay-100">
        <span className="absolute top-0 left-0 w-1/4 h-full bg-white opacity-30 transform -skew-x-30"></span>
      </span>
      
      {/* Konten Teks Tombol */}
      <span className="relative z-10">
                  {children}
      </span>
    </button>
    </div>
  )
}

export default GlassButton
