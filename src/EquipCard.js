import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function EquipCard({ equip, id, deleteButton, editButton }) {
  const [itemCount, setItemCount] = useState(0);
  console.log("checking here" + equip);
  return (
    <div className="equip-card">
      <Card>
        <CardContent>
          <h3 className="equip-name">{equip.name}</h3>
          <CardMedia
            component="img"
            height="250"
            image={equip.imgsrc}
            alt={equip.name}
          />
          <h3>{equip.plantype}</h3>
          <h3>{equip.price}</h3>
        </CardContent>
        <div className="equip-cart">
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon color="primary" />{" "}
          </Badge>
          <ButtonGroup>
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <CardActions>
          {editButton}
          {deleteButton}
        </CardActions>
      </Card>
    </div>
  );
}

export { EquipCard };
