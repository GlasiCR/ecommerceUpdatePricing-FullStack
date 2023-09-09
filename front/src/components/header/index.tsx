import * as S from './styles'

type Props = {
    logo?: string,
    titlePage: string,
    children: React.ReactNode,
}

export default function Header({children, titlePage}: Props){
    return(
        <S.Header>
            <>
                <S.Logo>
                </S.Logo>   
            </>
            <S.Nav>
                <S.TitleHeader>{titlePage}</S.TitleHeader>
                {children}
            </S.Nav>
        </S.Header>
    )
}