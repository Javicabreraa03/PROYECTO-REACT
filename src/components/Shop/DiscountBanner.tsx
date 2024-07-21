
import {useAuthActions, useThemeActions } from '../../hooks'
import './DiscountBanner.css'

export default function DiscountBanner() {
  const {theme} = useThemeActions()
  const { userData, isLogged} = useAuthActions()

    return (
      <div className={`discount-banner__container ${theme}`}>
          {isLogged 
            ? (<p>¡{userData.username}, aprovecha tu 20% de descuento!</p>)
            : (<p>¡Crea una cuenta y disfruta de un gran descuento!</p>)
          }
      </div>
    )
  }