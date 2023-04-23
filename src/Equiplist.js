import { EquipCard } from "./EquipCard.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Equiplist() {
  const [equipList, setEquipList] = useState([]);

  const getEquipList = () => {
    fetch(`https://guvi-hackathon2-backend.imrajkumar29.repl.co/api/getAll`)
      .then((response) => response.json())
      .then((mvs) => setEquipList(mvs));
  };

  useEffect(() => getEquipList(), []);
  console.log(equipList);

  const deleteEquip = (equipid) => {
    console.log("deleting movie " + equipid);
    fetch(
      `https://guvi-hackathon2-backend.imrajkumar29.repl.co/api/delete/${equipid}`,
      {
        method: "Delete"
      }
    ).then(() => getEquipList());
  };
  const navigate = useNavigate();
  return (
    <div>
      <br></br>

      <div className="equip-list-container">
        {equipList.map((mv) => (
          <EquipCard
            key={mv.equipid}
            equip={mv}
            id={mv.equipid}
            deleteButton={
              <IconButton
                color="error"
                onClick={() => deleteEquip(mv.equipid)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                sx={{ marginLeft: "auto" }}
                color={"secondary"}
                aria-label="edit"
                onClick={() => navigate(`/equip/edit/${mv.equipid}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

export { Equiplist };
