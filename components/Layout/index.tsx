import Link from "next/link"
import CenteredTabs from "../tabs/CenteredTabs"
import TopMenu from "../topMenu"

export default function Layout({children}:React.PropsWithChildren) {

  return (
    <>
    <TopMenu></TopMenu>
    <div className="bg-gray-100 min-h-screen flex h-11/12">
      <div className="bg-white flex-grow mt-1 mr-2 rounded-lg p-4">{children}<br/>
      </div>
    </div>
    </>
  )
}
