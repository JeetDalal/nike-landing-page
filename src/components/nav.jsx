import {hamburger} from '../assets/icons';
import {headerLogo} from '../assets/images';
import {navLinks} from '../constants/index'
const nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/"><img src={headerLogo} height={29} width={130}/></a>
            <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((items)=>(
                    <li key={items.label}>
                        <a href={items.href} className='font-monsterrat leading-normal text-lg text-slate-gray'> {items.label}</a>
                    </li>
                ))}
                <li className='text-monsterrat text-black'>Sign in / Explore now</li>
            </ul> 
            <div className='hidden max-lg:block'>
                    <img src={hamburger} height={25} width={25}/>
                </div>
        </nav>
    </header>
  ) 
}

export default nav