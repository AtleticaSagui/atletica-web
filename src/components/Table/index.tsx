import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

interface TableProps{
    columnsList: String[];
    dataList: String[][];
}

const MainTable = styled.table`
    position: relative;
    width: 90%;
    border: 0;
    font-size: 3rem;
    text-align: center;
`;

function Table({columnsList, dataList}: TableProps){
    return (
        <MainTable>
            <TableHeader columns={columnsList} />
            <TableBody eventList={dataList} />
        </MainTable>
    )
}

export default Table;