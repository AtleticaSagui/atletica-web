import styled from "styled-components";

interface TableHeaderProps {
    columns: String[];
}

const TableHeader = styled.thead`
    position: relative;
    display: flex;
    width: 100%;
`;

const TableRow = styled.tr`
    position: relative;
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
`;

const TableCell = styled.th`
    display: flex;
    flex: 1;
    justify-content: center;
`;

function TableHeaderComp({columns}: TableHeaderProps){
    return (
        <TableHeader>
            <TableRow>
                {
                    columns.map((column) => (
                        <TableCell> {column} </TableCell>
                    ))
                }
            </TableRow>
        </TableHeader>

    )
};

export default TableHeaderComp;