import React from "react";
import FileInput from "./components/FileInput/FileInput";

type FileInputsSectionProps = {
  formik: any;
};

const FileInputSection: React.FC<FileInputsSectionProps> = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <FileInput
        label="UG Degree"
        id="ugDegree"
        onChange={(event: any) =>
          formik.setFieldValue("ugDegree", event?.target?.files[0])
        }
        value={formik.values.ugDegree}
      />
      <FileInput
        label="PG Degree"
        id="pgFileInput"
        onChange={(event: any) =>
          formik.setFieldValue("pgDegree", event?.target?.files[0])
        }
        value={formik.values.pgDegree}
      />
      <FileInput
        label="ID Proof"
        id="idProof"
        onChange={(event: any) =>
          formik.setFieldValue("idProof", event?.target?.files[0])
        }
        value={formik.values.idProof}
      />
      <FileInput
        label="Photograph"
        id="photograph"
        onChange={(event: any) =>
          formik.setFieldValue("photograph", event?.target?.files[0])
        }
        value={formik.values.photograph}
      />
      <button type="button">Submit</button>
    </form>
  );
};

export default FileInputSection;
