
export function AuthinticationLayout({children}) {
    document.querySelector("body").style.background = "#eee"
  return (
    <div className="flex justify-center items-start my-10 md:my-20">
        {children}
    </div>
  )
}

export default AuthinticationLayout