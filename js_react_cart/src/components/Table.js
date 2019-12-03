import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsIcon from '@material-ui/icons/Sports';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  colorRed: {
    backgroundColor: "#FF0000",
    padding: "10px"
  },
  colorGreen: {
    backgroundColor: "#00FF00",
    padding: "10px",
  }
});

export default function SimpleTable(data) {
  const classes = useStyles();
  let list = data.data;

  const changeColor = (item) => {
    if (item.color != "" && item.color == "colorGreen") {
      return classes.colorGreen;
    } else if (item.color != "" && item.color == "colorRed") {
      return classes.colorRed;
    }
    return ""; 
  }

  const insertArrow = (item) => {
    if (item.color != "" && item.color == "colorGreen") {
      return <TrendingDownIcon />;
    } else if (item.color != "" && item.color == "colorRed") {
      return <TrendingUpIcon />;
    }
    return ""; 
  }

  const insertImg = (item) => {
    if (item.title != "" && item.title == "Книги") {
      return <MenuBookIcon />;
    } else if (item.title != "" && item.title == "Еда") {
      return <FastfoodIcon />;
    } else if (item.title != "" && item.title == "Спорт") {
      return <SportsIcon />;
    } else if (item.title != "" && item.title == "Запчасти для машин") {
      return <BuildIcon />;
    } else if (item.title != "" && item.title == "Сувениры") {
      return <CardGiftcardIcon />;
    } else {
      return ""; 
    }
  }

  return (
    <Paper className={classes.root}>
    <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead className="table-header">
        <TableRow>
            <TableCell className="table-title" align="center"></TableCell>
            <TableCell className="table-title" align="center">Тип</TableCell>
            <TableCell className="table-title" align="center">Название</TableCell>
            <TableCell className="table-title" align="center">Цена</TableCell>
            <TableCell className="table-title" align="center"></TableCell>
            <TableCell className="table-title" align="center">Количество</TableCell>
        </TableRow>
        <TableRow></TableRow>    
      </TableHead>
      <TableBody>
        {list.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell>
                {insertImg(item)}
              </TableCell>
              <TableCell>
                {item.title}
              </TableCell>
              <TableCell>
                <Checkbox id={String(item.id)} />{item.name}
              </TableCell>
              <TableCell align="center">
                <span className={changeColor(item)}>{item.price} руб / шт.</span>
              </TableCell>
              <TableCell>
                <span className="price-arrow">
                  {insertArrow(item)}
                </span>
              </TableCell>
              <TableCell align="center">{item.count}</TableCell>
            </TableRow> 
          );
        })}
      </TableBody>
    </Table>
  </Paper>
  );
}