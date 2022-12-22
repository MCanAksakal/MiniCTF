import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import StatisticsIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UsersIcon from "@mui/icons-material/Person";
import TeamsIcon from "@mui/icons-material/Groups";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import QuestionsIcon from '@mui/icons-material/Quiz';
import ConfigIcon from '@mui/icons-material/Settings';
import LogsIcon from "@mui/icons-material/Book";

export const mainListItems = (
  <React.Fragment>

    <ListItemButton>
      <ListItemIcon>
        <ScoreboardIcon />
      </ListItemIcon>
      <ListItemText primary="Skor Tablosu" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <QuestionsIcon />
      </ListItemIcon>
      <ListItemText primary="Sorular" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <StatisticsIcon />
      </ListItemIcon>
      <ListItemText primary="İstatistik" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Bildirimler" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <UsersIcon />
      </ListItemIcon>
      <ListItemText primary="Kullanıcılar" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <TeamsIcon />
      </ListItemIcon>
      <ListItemText primary="Takımlar" />
    </ListItemButton>
    
    <ListItemButton>
      <ListItemIcon>
        <ConfigIcon />
      </ListItemIcon>
      <ListItemText primary="Ayarlar" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LogsIcon />
      </ListItemIcon>
      <ListItemText primary="Log Kayıtları" />
    </ListItemButton>
    
  </React.Fragment>
);

