import { useThemeContext } from '../../hooks/'
import useUserContext from '../../hooks/useAuthContext'
import './DiscountBanner.css'

export default function DiscountBanner() {
  const {theme} = useThemeContext()
  const {userData, isLogged} = useUserContext()

  return (
    <div className={`discount-banner__container ${theme}`}>
        {isLogged 
          ? (<p>¡{userData.username}, aprovecha tu 20% de descuento!</p>)
          : (<p>¡Crea una cuenta y disfruta de un gran descuento!</p>)
        }
    </div>
  )
}