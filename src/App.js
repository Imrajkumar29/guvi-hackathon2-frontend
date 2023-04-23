import "./styles.css";
import * as React from "react";
import { useState } from "react";
import { Home } from "./Home.js";
import { EquipCard } from "./EquipCard.js";
import { AddEquip } from "./AddEquip.js";
import { Equiplist } from "./Equiplist.js";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NotFound } from "./NotFound";

function App() {
  const navigate = useNavigate();
  const [equipList, setEquipList] = useState([]);
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/equipment")} color="inherit">
            Equipments
          </Button>
          <Button onClick={() => navigate("/equipment/Add")} color="inherit">
            Add Equipments
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipment" element={<Equiplist />} />
        <Route
          path="/equipment/Add"
          element={
            <AddEquip equipList={equipList} setEquipList={setEquipList} />
          }
        />
        <Route path="*" element={<NotFound />} />
        {/* {<Route path="/equip/edit/:id" element={<EditEquip />} /> */} */}
        <Route path="/asset" element={<Navigate replace to="/equipment" />} />
      </Routes>
    </div>
  );
}

export default App;
