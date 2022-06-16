<template>
  <div class="container">
    <div class="formSearch">
      <div class="form-label">
        <div>
          <label for="input-name">Họ Và Tên:</label>
        </div>
        <div>
          <input
            type="text"
            id="input-name"
            class="form-inp"
            v-model="fullName"
          />
        </div>
      </div>
      <div class="form-label">
        <div>
          <label for="inputMa">Mã Học Sinh:</label>
        </div>
        <div>
          <input
            type="text"
            id="inputMa"
            class="form-inp"
            v-model="codeStudent"
          />
        </div>
      </div>
    </div>
    <button class="btn" @click="searchStudent">Tìm Kiếm</button>
    <div style="overflow-x: auto">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Trường thi</th>
            <th scope="col">Quận Huyện</th>
            <th scope="col">Mã Học Sinh</th>
            <th scope="col">Lớp</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Ngày Sinh</th>
            <th scope="col">Tháng Sinh</th>
            <th scope="col">Năm Sinh</th>
            <th scope="col">Giới Tính</th>
            <th scope="col">Nơi Sinh</th>
            <th scope="col">Dân Tộc</th>
            <th scope="col">Hộ Khẩu</th>
            <th scope="col">Điện Thoại</th>
            <th scope="col">Tổng Điểm Năm 1</th>
            <th scope="col">Tổng Điểm Năm 2</th>
            <th scope="col">Tổng Điểm Năm 3</th>
            <th scope="col">Tổng Điểm Năm 4</th>
            <th scope="col">Tổng Điểm Năm 5</th>
            <th scope="col">Tổng Điểm 5 Năm</th>
            <th scope="col">Điểm Ưu Tiên</th>
            <th scope="col">Tổng Điểm</th>
            <th scope="col">Ghi Chú</th>
          </tr>
        </thead>
        <tbody v-for="(student, index) in search" :key="index">
          <tr>
            <th scope="row">{{ student.stt }}</th>
            <td>{{ student.truongTH }}</td>
            <td>{{ student.quanHuyen }}</td>
            <td>{{ student.maHocSinh }}</td>
            <td>{{ student.lop }}</td>
            <td>{{ student.hoTen }}</td>
            <td>{{ student.ngaySinh }}</td>
            <td>{{ student.thangSinh }}</td>
            <td>{{ student.namSinh }}</td>
            <td>{{ student.gioiTinh }}</td>
            <td>{{ student.noiSinh }}</td>
            <td>{{ student.danToc }}</td>
            <td>{{ student.hoKhau }}</td>
            <td>{{ student.dienThoai }}</td>
            <td>{{ student.tongDiemNam1 }}</td>
            <td>{{ student.tongDiemNam2 }}</td>
            <td>{{ student.tongDiemNam3 }}</td>
            <td>{{ student.tongDiemNam4 }}</td>
            <td>{{ student.tongDiemNam5 }}</td>
            <td>{{ student.tongDiem5Nam }}</td>
            <td>{{ student.diemUuTien }}</td>
            <td>{{ student.tongDiem }}</td>
            <td>{{ student.ghiChu }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "searchStudent",
  data() {
    return {
      fullName: "",
      codeStudent: "",
      listStudent: [],
      search: [],
    };
  },
  methods: {
    async getData() {
      const response = await axios.get("http://localhost:3000/api/getAll");
      this.listStudent = response.data;
      this.search = response.data;
    },
    searchStudent() {
      for (let i = 0; i < this.listStudent.length; i++) {
        console.log(
          this.listStudent[i].maHocSinh + " " + this.listStudent[i].hoTen
        );
      }
      if (this.fullName.trim() === "" && this.codeStudent.trim() === "") {
        this.search = this.listStudent;
      } else if (this.codeStudent.trim() != "" && this.fullName.trim() === "") {
        this.search = [];
        for (let i = 0; i < this.listStudent.length; i++) {
          if (this.listStudent[i].maHocSinh === this.codeStudent.trim()) {
            this.search.push(this.listStudent[i]);
          }
        }
      } else if (this.fullName.trim() != "" && this.codeStudent.trim() === "") {
        this.search = [];
        for (let i = 0; i < this.listStudent.length; i++) {
          if (this.listStudent[i].hoTen === this.fullName.trim()) {
            this.search.push(this.listStudent[i]);
          }
        }
      } else {
        this.search = [];
        for (let i = 0; i < this.listStudent.length; i++) {
          if (this.listStudent[i].maHocSinh === this.codeStudent.trim()) {
            this.search.push(this.listStudent[i]);
          }
        }
        if (this.search.length == 0) {
          for (let i = 0; i < this.listStudent.length; i++) {
            if (this.listStudent[i].hoTen === this.fullName.trim()) {
              this.search.push(this.listStudent[i]);
            }
          }
        }
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.formSearch {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto 0;
}

.form-label {
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

.form-label div {
  margin-bottom: 0.5rem;
}
.btn {
  margin: 1rem 0 1.5rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  padding: 0.375rem 2rem;
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
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tbody:nth-child(even) {
  background-color: #f2f2f2;
}

.form-inp {
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-inp:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}
</style>
