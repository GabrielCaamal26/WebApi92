import React from 'react';

const Header = () => {
  return (
<div className="navbar bg-base-100 flex">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">WebApi92</a>
    </div>
    
    <div className="dropdown">
    <div tabIndex="0" role="button" class="btn m-1">
        Tema
    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
    </div>
    <ul tabIndex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Nord" value="nord"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dracula" value="dracula"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
    </ul>
    </div>
</div>
);
};

export default Header;