import { FaBars } from 'react-icons/fa';
 import { NavLink as Link } from 'react-router-dom';
 import styled from 'styled-components';

 export const Nav = styled.div`
  // width: 1440px;
  width:100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  // justify-content: center;

  
`;

export const NavbarSections = styled.div`
  background-color: #ffffff;
  backdrop-filter: blur(4px);
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
  
`;

 export const NavLink = styled(Link)`
  width: 56px;
  height: 24px;
  overflow: hidden;
  margin-right: 40px;
  position: relative;
`;

 export const Label2 = styled.div`
  color: #000000;
  font-size: 16px;
  font-family: Gilroy-SemiBold;
  line-height: 16px;
  position: absolute;
  top: 4px;
  left: 0;
`;
export const Label1 = styled.div`
  color: #000000;
  font-size: 16px;
  font-family: Gilroy-SemiBold;
  line-height: 16px;
  position: absolute;
  top: 31px;
  left: 0;
`;    


export const JumyLogo = styled.div`
  width: 83px;
  margin-right: 32px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ComponentsLogoJumyLogo = styled.img`
  width: 48px;
  height: 56px;
  align-self: stretch;
`;
export const BETA = styled.div`
  color: #ffffff;
  font-size: 10px;
  font-family: Gilroy-SemiBold;
  line-height: 10px;
  background-color: #000000;
  width: 35px;
  height: 10px;
  overflow: hidden;
  margin-top: 9px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 17px;



padding: 3px 6px;

position: absolute;

left: 95px;
// top: 9px;





  
`;
export const SearchBox = styled.div`
  background-color: #ffffff;
  border-width: 1px;
  border-color: #e3e3e3;
  border-style: solid;
  width: 666px;
  margin-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
`;
export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const SearchText = styled.div`
  color: #979797;
  width: 636px;
  height: 20px;
  font-size: 16px;
  font-family: Gilroy-Medium;
  letter-spacing: -0.16px;
  line-height: 22.4px;
`;

export const NavLink1 = styled(Link)`
  width: 44px;
  height: 24px;
  overflow: hidden;
  margin-right: 40px;
  position: relative;
`;
export const NavLink2 = styled(Link)`
  width: 88px;
  height: 24px;
  overflow: hidden;
  position: relative;
  margin-right: 32px;
`;
export const NavLeftButton = styled.div`
  background-color: #000000;
  width: 207px;
  height: 40px;
  overflow: hidden;
  position: relative;
`;
export const Ellipse10 = styled.div`
  width: 165px;
  height: 165px;
  position: absolute;
  top: -167px;
  left: 22px;
`;
export const ComponentsIconsGeneral20px = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 18px;
  left: 12px;
`;
export const Label = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-family: Gilroy-SemiBold;
  line-height: 14px;
  position: absolute;
  top: 13px;
  left: 54px;
`;
