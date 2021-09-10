import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../assets/logo_nav.png';

// import OnOutsiceClick from 'react-outclick';

import { HiMenu } from 'react-icons/hi';

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false); // products menu state

	const [showMain, setShowMain] = useState(false); //main menu state used in small screens

	return (
		<>
			{/* below div acts as a backdrop when clicked on it all the open menu closes */}
			<div
				className={
					showMenu || showMain ? 'fixed z-40 w-screen h-screen' : 'hidden'
				}
				onClick={() => {
					setShowMenu(false);
					setShowMain(false);
				}}
			></div>
			{/* main navbar  */}
			<nav className='w-screen md:h-20 h-14 bg-gray-800 flex items-center justify-start'>
				{/* logo */}
				<div className='h-full flex items-center'>
					<img src={NavLogo} alt='am-engineers-logo' className='h-3/4' />
					<div className='border-r-2 border-gray-400 border-solid h-3/4'></div>
				</div>
				{/* menu */}
				{/* menu adapts accordingly to showMain in small size screen */}
				<ul
					className={
						'md:flex items-center justify-start z-50 ' +
						(showMain
							? 'absolute top-14 bg-gray-800 right-0 flex flex-col w-56'
							: 'hidden')
					}
				>
					<li
						className={
							showMain
								? 'py-2 border w-full text-center border-solid border-t-0'
								: ''
						}
					>
						<Link
							to='/'
							className='mx-3 text-xl text-gray-400 hover:text-gray-100 transform transition-all'
						>
							Home
						</Link>
					</li>
					<li
						className={
							showMain
								? 'py-2 border w-full text-center border-solid border-t-0'
								: ''
						}
					>
						{/* below p is submenu of products caterogy, use only in large screens */}
						<p
							className={
								'mx-3 text-xl  hover:text-gray-100 transform transition-all cursor-pointer md:flex hidden ' +
								(showMenu ? 'text-gray-100' : 'text-gray-400')
							}
							onClick={() => setShowMenu(!showMenu)}
						>
							Products
						</p>
						<p
							className={
								'mx-3 text-xl  hover:text-gray-100 transform transition-all cursor-pointer md:hidden ' +
								(showMenu ? 'text-gray-100' : 'text-gray-400')
							}
						>
							Products
						</p>
					</li>

					<div
						className={
							showMenu
								? 'md:absolute top-16 left-40 z-50 flex flex-col items-center justify-center rounded-md bg-gray-50 shadow-2xl box-border '
								: 'hidden transform transition-all'
						}
						onClick={() => setShowMenu(false)}
					>
						<Link
							to='/'
							className='px-4 py-2 border border-solid border-gray-800 m-0 w-full text-center border-t-0'
						>
							Welding Equipments
						</Link>
						<Link
							to='/'
							className='px-4 py-2 border border-solid border-gray-800 m-0 w-full text-center border-t-0'
						>
							Grinding Wheels
						</Link>
						<Link
							to='/'
							className='px-4 py-2 border border-solid border-gray-800 m-0 w-full text-center border-t-0'
						>
							Abrasive
						</Link>
						<Link
							to='/'
							className='px-4 py-2 border border-solid border-gray-800 m-0 w-full text-center border-t-0'
						>
							Paints
						</Link>
						<Link
							to='/'
							className='px-4 py-2 border border-solid border-gray-800 m-0 w-full text-center border-t-0'
						>
							Safety Items
						</Link>
					</div>

					<li
						className={
							showMain
								? 'py-2 border w-full text-center border-solid border-t-0'
								: ''
						}
					>
						<Link
							to='/'
							className='mx-3 text-xl text-gray-400 hover:text-gray-100 transform transition-all'
						>
							About Us
						</Link>
					</li>
				</ul>
				{/* side button */}
				<div className='ml-auto mr-3 hidden xs:flex'>
					<button className='border-2 border-solid border-yellow-600 px-3 py-2 text-yellow-600 hover:text-gray-50 hover:bg-yellow-600'>
						Order Now
					</button>
				</div>
				{/* hamburder menu */}
				<div className='h-full flex ml-auto xs:ml-0 md:hidden'>
					<button onClick={() => setShowMain(!showMain)}>
						<HiMenu
							className={
								'w-12 h-10 mr-4 ' +
								(showMain ? 'text-gray-50' : 'text text-gray-400')
							}
						></HiMenu>
					</button>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
