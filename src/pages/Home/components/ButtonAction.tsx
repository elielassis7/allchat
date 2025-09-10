import { useNavigate } from "react-router-dom"


export function ButtonAction() {
  const navigate = useNavigate()

  return (
    <div>
      <button
        className="px-4 py-1   lg:px-6 lg:py-2 rounded-md cursor-pointer text-gray-200 font-bold shadow-md bg-gradient-to-r from-basecolor-second via-basecolor-fourth to-basecolor 
        transition-colors duration-700 ease-in-out hover:from-basecolor-fourth hover:via-basecolor hover:to-basecolor-fourth active:transition-transform active:scale-95"
        onClick={() => navigate("/plans")}
      >
        <span className="font-primary-font hover:text-white text-xs md:text-base lg:text-lg xl:text-xl">
          Começar agora
        </span>
      </button>

    </div>
  )
}