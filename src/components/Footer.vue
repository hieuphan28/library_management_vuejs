<template>
  <footer class="footer">
    <div class="container">
      <div class="title">OUR <span class="brown">WEB</span></div>
      <div class="content">
        We are here to give you a great experience of Danalib library. You will
        not have to worry about competing for books, just book in advance to be
        able to bring back your favorite books.
        <div class="contact">
          <div class="contactus">Contact Us:</div>
          <a href="#">Danalib@gmail.com</a>
        </div>
        <div class="company">&copy; Copyright 2021 Danalib</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  /* position: absolute; */
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  font-family: Lato;
}
footer .container {
  color: black;

}
footer .title {
  font-size: xx-large;
  font-weight: bold;
  margin: 3% 0%;
  font-family: Merriweather;
}
footer .content {
  font-size: large;
  padding: 0% 15%;
  font-weight: normal;
  opacity: 60%;
}
footer .contact {
  font-size: large;
  margin-top: 5%;
}
footer .contact .contactus {
  font-weight: bold;
  font-style: italic;
  display: inline;
}
footer .container .company {
  margin-top: 1%;
  font-size: medium;
}
.brown {
  color: #886e5e;
}
</style>