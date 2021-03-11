import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

export const Container = styled.div`
	max-width: 80rem;
	width: 100%;
	height: auto;
	padding: 0 2rem;
	margin: 0 auto;
	background: #005596;
`;
export const BottomNav = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0.8rem 0;
	background-color: $color-black;
	z-index: 99;
	will-change: transform;
	transform: translateZ(0);
	box-shadow: $box-shadow;
	background: #005596;
`;
export const NavItem = styled.nav`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	text-align: center;
	font-size: 2rem;
	color: $color-light;
`;
export const NavLink = styled.nav`
	display: flex;
	flex-direction: column;
`;
