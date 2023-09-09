import * as S from './styles'

type Props = {
    titlePage: string,
    children: React.ReactNode,
}

export default function NavHeader({titlePage, children}: Props){
    return(
        <S.Nav>
            <S.TitleHeader>{titlePage}</S.TitleHeader>
            {children}
        </S.Nav>
    )
}