import React from "react";
import {
	AiOutlineHome,
	AiOutlineCamera,
	AiOutlineUpload,
} from "react-icons/ai";
import { FiMap } from "react-icons/fi";
import * as S from "./styles";

export default function Header() {
	return (
		<S.BottomNav>
			<S.NavItem>
				<S.NavLink>
					<S.MenuLink to="/">
						<AiOutlineHome />
					</S.MenuLink>
				</S.NavLink>
			</S.NavItem>
			<S.NavItem>
				<S.NavLink>
					<S.MenuLink to="/camera">
						<AiOutlineCamera />
					</S.MenuLink>
				</S.NavLink>
			</S.NavItem>
			<S.NavItem>
				<S.NavLink>
					<S.MenuLink to="/file">
						<AiOutlineUpload />
					</S.MenuLink>
				</S.NavLink>
			</S.NavItem>
			<S.NavItem>
				<S.NavLink>
					<S.MenuLink to="/map">
						<FiMap />
					</S.MenuLink>
				</S.NavLink>
			</S.NavItem>
		</S.BottomNav>
	);
}
