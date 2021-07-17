import { TableCell, Tooltip, TableCellProps } from '@material-ui/core';
import React from 'react';

const ImprovedTableCell: React.FC<TableCellProps> = ({ title, children, ...props }) => {
  if (title) {
    return (
      <Tooltip title={title}>
        <TableCell {...props}>{children}</TableCell>
      </Tooltip>
    );
  } else {
    return <TableCell {...props}>{children}</TableCell>;
  }
};

export default ImprovedTableCell;
