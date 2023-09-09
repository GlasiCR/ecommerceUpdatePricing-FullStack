import { MouseEventHandler } from 'react'
import * as S from './styles'

type Props = {
    bgButton?: string,
    borderButton?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    titleButton: string,
    disabled?: boolean
}

export default function Button({bgButton, borderButton, onClick, titleButton, disabled}: Props){
    return(
        <S.Button backgroundColor={bgButton} border={borderButton} onClick={onClick} disabled={disabled}>
            {titleButton}
        </S.Button>
    )
}