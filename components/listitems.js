import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StatisticsIcon from "@mui/icons-material/BarChart";
import UsersIcon from "@mui/icons-material/Person";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import QuestionsIcon from '@mui/icons-material/Quiz';
import LogsIcon from "@mui/icons-material/Book";

export const mainListItems = (
  <React.Fragment>

    <ListItemButton href="/ScoreBoard">
      <ListItemIcon>
        <ScoreboardIcon />
      </ListItemIcon>
      <ListItemText primary="Skor Tablosu" />
    </ListItemButton>

    <ListItemButton href="/Questions">
      <ListItemIcon>
        <QuestionsIcon />
      </ListItemIcon>
      <ListItemText primary="Sorular" />
    </ListItemButton>

    <ListItemButton href="/Stats">
      <ListItemIcon>
        <StatisticsIcon />
      </ListItemIcon>
      <ListItemText primary="İstatistik" />
    </ListItemButton>

    <ListItemButton href="/Users">
      <ListItemIcon>
        <UsersIcon />
      </ListItemIcon>
      <ListItemText primary="Kullanıcılar" />
    </ListItemButton>

    <ListItemButton href="/Log">
      <ListItemIcon>
        <LogsIcon />
      </ListItemIcon>
      <ListItemText primary="Log Kayıtları" />
    </ListItemButton>
    
  </React.Fragment>
);

