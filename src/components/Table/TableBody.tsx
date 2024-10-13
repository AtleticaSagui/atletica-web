import styled from "styled-components";

interface TableBodyProps {
    eventList: String[][];
}

const TableBody = styled.tbody`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

const TableRow = styled.tr`
    position: relative;
    display: flex;
    border-radius: 15px;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray);
`;

const TableCell = styled.td`
    color: white;
    display: flex;
    flex: 1;
    justify-content: center;
`;

function TableBodyComp({eventList}: TableBodyProps){
    return (
        <TableBody>
            {
                eventList.map((event) => (
                    <TableRow>
                        <TableCell>
                            {event[0]}
                        </TableCell>

                        <TableCell>
                            {event[1]}
                        </TableCell>

                        <TableCell>
                            {event[2]}
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
};

export default TableBodyComp;