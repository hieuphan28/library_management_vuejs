<template>
<footer>
      <div class="container">
          <div class="contact-footer">
            <div class="contactus">Contact us: <a href="#">Danalib@gmail.com</a> </div>
            
          </div>
          <div class="company">&copy; Copyright 2021 Danalib</div>
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
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:  #ECD4B4;
  text-align: center;
 
}
footer .container {
  /* margin: 2% 0%; */
  color: black;
  padding:1.5%
}
footer .contact {
  font-family: Lato;
  font-style: italic;
  font-size: medium;
  text-align: center;
}
footer .contact .contactus {
  font-weight: bold;
  display: inline;
  text-decoration-line: underline;
}
footer .contact a{
  text-decoration: none;
  color: black;
  transition: 0.3s;
}
footer .contact a:hover{
  color: red;
}
footer .container .company {
  font-size: medium;
}

</style>