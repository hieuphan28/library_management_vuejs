<template>
  <div class="container-fluid">
    <div>
      <div class="title">CATEGORIES:</div>
      <div class="filter" v-for="category in categories" :key="category.id">
        <div class="category-name">
          <a :href="`/books?category=${category.category_id}`">{{
            category.category_name
          }}</a>
        </div>
      </div>
    </div>
    <div class="department">
      <div class="title">DEPARTMENTS:</div>
      <div
        class="filter"
        v-for="department in departments"
        :key="department.id"
      >
        <div class="department-name">
          <a :href="`/books?department=${department.department_id}`">{{
            department.department_name
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Categories",
  computed: {
    ...mapGetters({
      categories: "category/categories",
      departments: "department/departments",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variable.scss/";
.container-fluid {
  @include mobile {
    margin-left: 1rem;
    padding: 0;
  }
}
.title {
  text-align: left;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 5%;
  @include mobile {
    font-size: small;
  }
}
.filter {
  padding: 3% 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .category-name {
    a {
      text-decoration: none;
      color: black;
      transition: 0.4s;
      @include mobile {
        font-size: small;
      }
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
      @include mobile {
        font-size: small;
      }
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
