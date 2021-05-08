<template>
  <div class="container-fluid">
    <div>
      <div class="title">CATEGORIES:</div>
      <div class="filter" v-for="category in categories" :key="category.id">
        <div class="category-name">
          <a href="">{{ category.name }}</a>
        </div>
      </div>
    </div>
    <div class="department">
      <div class="title">DEPARTMENT:</div>
      <div class="filter" v-for="department in departments" :key="department.id">
        <div class="department-name">
          <a href="">{{ department.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Textbook",
        },
        {
          id: 2,
          name: "Magazine",
        },
        {
          id: 3,
          name: "Novel",
        },
        {
          id: 4,
          name: "Science Journal",
        },
        {
          id: 5,
          name: "Reference Book",
        },
      ],
      departments: [
        {
          id: 1,
          name: "Engineering Department",
        },
        {
          id: 2,
          name: "IT Department",
        },
        {
          id: 3,
          name: "Economic Department",
        },
        {
          id: 4,
          name: "Literature Department",
        },
        {
          id: 5,
          name: "Music Department",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.title {
  text-align: left;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 5%;
}
.filter {
  padding: 3% 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .category-name {
    a {
      text-decoration: none;
      color: black;
      transition: 0.4s;
    }
    a:hover {
      color: #a36514;
    }
  }

  .department-name {
    a {
      text-decoration: none;
      color: black;
      transition: 0.4s;
    }
    a:hover {
      color: #a36514;
    }
  }
}
.department {
  padding-top: 20%;
}
</style>