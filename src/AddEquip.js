import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const equipValidationSchema = yup.object({
  equipid: yup.number().required(),
  name: yup.string().required(),
  imgsrc: yup.string().required("why not fill this image").min(4),
  plantype: yup.string().required().min(0).max(10),
  price: yup.number().required()
});

export function AddEquip({ equipList, setEquipList }) {
  const formik = useFormik({
    initialValues: {
      equipid: "",
      name: "",
      imgsrc: "",
      plantype: "",
      price: ""
    },
    validationSchema: equipValidationSchema,
    onSubmit: (newEquip) => {
      console.log(newEquip);
      addEquip(newEquip);
    }
  });

  const navigate = useNavigate();

  const addEquip = (newEquip) => {
    //Post method -fetch
    //1. method - POST
    //2data(newMovie)- body &JSON
    //3.Header -JSON
    fetch(`https://guvi-hackathon2-backend.imrajkumar29.repl.co/api/post`, {
      method: "POST",
      body: JSON.stringify(newEquip),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => navigate("/equipment"));
  };
  return (
    <form onSubmit={formik.handleSubmit} className="add-equip-form">
      <TextField
        label="EquipmentId"
        variant="outlined"
        type="text"
        value={formik.values.equipid}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="equipid"
        error={formik.touched.equipid && formik.errors.equipid}
        helperText={
          formik.touched.equipid && formik.errors.equipid
            ? formik.errors.equipid
            : null
        }
      />

      <TextField
        label="Name"
        variant="outlined"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="name"
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />

      <TextField
        label="Image"
        variant="outlined"
        type="text"
        value={formik.values.imgsrc}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="imgsrc"
        error={formik.touched.imgsrc && formik.errors.imgsrc}
        helperText={
          formik.touched.imgsrc && formik.errors.imgsrc
            ? formik.errors.imgsrc
            : null
        }
      />
      <TextField
        label="PlanType"
        variant="outlined"
        value={formik.values.plantype}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="plantype"
        type="text"
        error={formik.touched.plantype && formik.errors.plantype}
        helperText={
          formik.touched.plantype && formik.errors.plantype
            ? formik.errors.plantype
            : null
        }
      />
      {formik.touched.plantype && formik.errors.plantype
        ? formik.errors.plantype
        : null}
      <TextField
        label="Price"
        variant="outlined"
        type="text"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="price"
        error={formik.touched.price && formik.errors.price}
        helperText={
          formik.touched.price && formik.errors.price
            ? formik.errors.price
            : null
        }
      />
      {formik.touched.price && formik.errors.price ? formik.errors.price : null}

      <Button type="Submit" variant="contained">
        add movie
      </Button>
      <br></br>
    </form>
  );
}
