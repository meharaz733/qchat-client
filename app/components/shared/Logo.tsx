import Image from "next/image"

const Logo = ({className = ''}: {
    className?: string
}) => {
  return (
    <Image className={`${className}`} src={'/img/logo/qchat-logo.png'} width={150} height={40} alt="qchat logo"/>
  )
}

export default Logo