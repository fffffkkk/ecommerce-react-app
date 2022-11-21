import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/icons/book-svgrepo-com.svg';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const navigate = useNavigate();

	return (
		<div className='navbar bg-sky-400 rounded-2xl'>
			<div className='flex-1'>
				<Link to='/' className='btn btn-ghost normal-case text-xl gap-1'>
					<Logo className='w-[40px] h-[40px]' />
					GETBOOK
				</Link>
			</div>
			<div className='flex-none'>
				{/* search icon */}
				<button
					className='btn btn-ghost btn-circle'
					onClick={() => navigate('/search')}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</button>
				<div className='dropdown dropdown-end'>
					{/* card icon */}
					<label tabIndex={0} className='btn btn-ghost btn-circle'>
						<div className='indicator'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
							<span className='badge badge-sm indicator-item'>8</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
					>
						<div className='card-body'>
							<span className='font-bold text-lg'>8 Items</span>
							<span className='text-info'>Subtotal: $999</span>
							<div className='card-actions'>
								<button className='btn btn-primary btn-block'>View cart</button>
							</div>
						</div>
					</div>
				</div>
				<div className='dropdown dropdown-end'>
					{/* use icon */}
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img src='https://placeimg.com/80/80/people' />
						</div>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<Link to={`/profile-user/${1}`} className='justify-between'>
								Profile
							</Link>
						</li>
						<li>
							<Link to='/settings'>Settings</Link>
						</li>
						<li>
							<Link to='/'>Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Navbar;