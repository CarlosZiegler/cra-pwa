import React from "react";
import { AiOutlineHome, AiOutlineCamera } from 'react-icons/ai';
import * as S from "./styles"

export default function Header() {
    return (
            
                    <S.BottomNav>
                        <S.NavItem>
                            <S.NavLink>
                                <S.MenuLink to="/"><AiOutlineHome /></S.MenuLink>
                            </S.NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavLink>
                                <S.MenuLink to="/camera"><AiOutlineCamera /></S.MenuLink>
                            </S.NavLink>
                        </S.NavItem>
                    </S.BottomNav>
               
    );
}
