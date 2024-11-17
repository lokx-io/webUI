import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

interface SimpleDialogProps {
  onClose: Function;
  open: boolean;
  values: string[] | null;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, values } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      PaperProps={{ sx: { borderRadius: "20px" } }}
      onClose={handleClose}
      open={open}
      maxWidth="sm"
      fullWidth="true">
      <DialogTitle>Choose an asset</DialogTitle>
      <List sx={{ pt: 0 }}>
        {values?.map((usersAssets) => (
          <ListItem
            button
            onClick={() => handleListItemClick(usersAssets)}
            key={usersAssets}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[900], color: grey[50] }}>
                <DescriptionOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={usersAssets} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="New asset" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export function WalletDialog(props: SimpleDialogProps) {
  const { onClose, open, values } = props;

  const handleClose = () => {
    onClose(value);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      PaperProps={{ sx: { borderRadius: "20px" } }}
      onClose={handleClose}
      open={open}
      maxWidth="sm">
      <DialogTitle>Choose your wallet</DialogTitle>
      <List sx={{ pt: 0 }}>
        {values?.map((walletChoices) => (
          <ListItem
            button
            onClick={() => handleListItemClick(walletChoices)}
            key={walletChoices}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[900], color: grey[50] }}>
                <DescriptionOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={walletChoices} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addWallet")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="New Wallet" />
        </ListItem>
      </List>
    </Dialog>
  );
}