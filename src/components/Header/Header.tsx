import React from "react";

import * as S from "./styles"

export default function Header() {
    return (
                <S.Container>
                    <S.BottomNav>
                        <S.NavItem>
                            <S.NavLink>
                                <S.MenuLink to="/">Home</S.MenuLink>
                            </S.NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavLink>
                                
                                <S.MenuLink to="/camera">Camera</S.MenuLink>
                            </S.NavLink>
                        </S.NavItem>
                    </S.BottomNav>
                </S.Container>   
    );
}
