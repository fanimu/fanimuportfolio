import React from 'react';
import { Link } from 'react-scroll';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 mx-auto z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center justify-center">
        <p className="mt-4 absolute text-lg font-bold left-[70px] z-100">FaniMu</p>
        <img src={logo} alt="logo" className="rounded-full px-2 border-b-[1px] border-b-gray-600" />
      </div>

      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => {
            return (
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                <Link activeClass="active" to={link} spy={true} smooth={true} offset={-70} duration={500}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
