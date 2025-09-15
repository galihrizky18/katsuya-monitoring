
interface GlassButtonInterfave{
  children: React.ReactNode
  width?: string;
  type?: "button" | "submit" | "reset";
  disable?:boolean
}

const GlassButton: React.FC<GlassButtonInterfave> = ({ children, width, type = 'button', disable = false}) => {
  return (
    <button
      style={{ width: width || 'auto' }}
      type={type} 
      disabled={disable}
      className={`
        isolate group relative 
        px-5 py-2
        font-bold text-white text-lg 
        bg-gradient-to-r from-blue-500 to-cyan-400 
        rounded-lg 
        shadow-xl 
        overflow-hidden 
        transition-all duration-300 ease-out 
        transform hover:scale-105
        cursor-pointer
      `}>
      {/* Lapisan Latar Belakang untuk efek kilau */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-out"></span>

      {/* EFEK BARU: Garis cahaya kilat */}
      <span className="absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out delay-100">
        <span className="absolute top-0 left-0 w-1/4 h-full bg-white opacity-30 transform -skew-x-30"></span>
      </span>
      
      {/* Konten Teks Tombol */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}

export default GlassButton
