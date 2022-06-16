<template>
  <div class="main">
    <div class="file_input">
      <input type="file" id="file-inp" @change="changeFileName" />
      <label for="file-inp" class="label-input">
        <div class="inner_label">
          <i class="fa-solid fa-file-arrow-up"></i>
          <span>{{ fileName }}</span>
        </div>
      </label>
      <button type="button" class="btn" @click="readFile">Import File</button>
    </div>
  </div>
</template>

<script>
import readXlsxFile from "read-excel-file";
import axios from "axios";

export default {
  name: "student",
  props: {},
  data() {
    return {
      fileImport: "",
      listStudent: [],
      fileName: "Please input file...",
    };
  },
  methods: {
    changeFileName(e) {
      let selectedFile = e.target.files ? e.target.files[0] : null;
      this.fileName = selectedFile.name;
      this.fileImport = selectedFile;
    },
    readFile() {
      readXlsxFile(this.fileImport).then((rows) => {
        this.tranferData(rows);
      });
      alert("Import Successful!!!");
    },
    tranferData(f) {
      for (let i = 0; i < f.length; i++) {
        if (Number.isInteger(f[i][0])) {
          this.listStudent.push(f[i]);
          console.log(this.listStudent);
        }
      }
      this.postData();
      this.$router.push({
        name: "Search",
      });
    },

    async postData() {
      try {
        await axios.delete("http://localhost:3000/api/delete");
      } catch (err) {
        console.log(err);
      }
      for (let i = 0; i < this.listStudent.length; i++) {
        const student = {
          stt: this.listStudent[i][0],
          truongTH: this.listStudent[i][1],
          quanHuyen: this.listStudent[i][2],
          maHocSinh: this.listStudent[i][3].replace("\n", ""),
          lop: this.listStudent[i][4],
          hoTen: this.listStudent[i][5],
          ngaySinh: this.listStudent[i][6],
          thangSinh: this.listStudent[i][7],
          namSinh: this.listStudent[i][8],
          gioiTinh: this.listStudent[i][9],
          noiSinh: this.listStudent[i][10],
          danToc: this.listStudent[i][11],
          hoKhau: this.listStudent[i][12],
          dienThoai: this.listStudent[i][13],
          tongDiemNam1: this.listStudent[i][14],
          tongDiemNam2: this.listStudent[i][15],
          tongDiemNam3: this.listStudent[i][16],
          tongDiemNam4: this.listStudent[i][17],
          tongDiemNam5: this.listStudent[i][18],
          tongDiem5Nam: this.listStudent[i][19],
          diemUuTien: this.listStudent[i][20],
          tongDiem: this.listStudent[i][21],
          ghiChu: this.listStudent[i][22],
        };
        try {
          const response = await axios.post(
            "http://localhost:3000/api/post",
            student
          );
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style scoped>
.main {
  width: 500px;
  margin: auto;
}
.file_input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
}

input[type="file"] {
  display: none;
}

.btn {
  width: 100%;
  margin-top: 1rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn:focus {
  box-shadow: 0 0 0 0.2rem rgb(38 143 255 / 50%);
}

.label-input {
  display: block;
  width: 100%;
  height: 100px;
  color: #fff;
  background-color: chocolate;
  border-radius: 5px;
  cursor: pointer;
}

.label-input:hover {
  background-color: rgb(205, 97, 20);
}

.inner_label {
  display: flex;
  flex-direction: column;
  padding-top: 24px;
}

.inner_label i {
  font-size: 28px;
  margin-bottom: 10px;
}
</style>
