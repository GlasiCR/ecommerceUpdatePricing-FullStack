import * as S from './styles'   

type TableProps = {
    header: string[],
    children: React.ReactNode | string,
    }

export default function Table({header, children}: TableProps){
    return (
        <S.ContainerTable>
            <S.Thead>
            <tr>
                {header.map((item) => (
                <th key={item}>{item}</th> 
                ))}
            </tr>
            </S.Thead>
            <S.Tbody>
                {children}
            </S.Tbody>
        </S.ContainerTable>
    )
}