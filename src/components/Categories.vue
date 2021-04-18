<template>
  <div class="container">
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
          name: "Action and Adventure",
        },
        {
          id: 2,
          name: "Art and Architecture",
        },
      ],
      departments: [
        {
          id: 1,
          name: "Action and Adventure",
        },
        {
          id: 2,
          name: "Art and Architecture",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.title {
  text-align: center;
  font-size: x-large;
  font-weight: bold;
}
.filter {
  padding: 5% 0;
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