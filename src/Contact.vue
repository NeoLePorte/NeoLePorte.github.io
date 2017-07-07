<<<<<<< HEAD
<template id="contact-component-template">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight">
        <div class="contact">
        <transition name="custom-classes-transition" enter-active-class="animated fadeIn">
        <div>
            <div class="social-section">
                <form-child></form-child>
                <three class="aframe"></three>
                <div class="social-icons">
                    <i class="fa fa-facebook-square fa-4x" aria-hidden="true"></i>
                    <i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
                    <i class="fa fa-github-square fa-4x" aria-hidden="true"></i>
                </div>
            </div>
            </div>
        </transition>
                
        </div>
  </transition>
</template>

<script>
import Child from './contact-child.vue'
import Three from './contact-three.vue'

export default {
    template:'#contact-component-template',
    components: {
        formChild: Child,
        three: Three
  },
  data() {
    return { isShowing: false }
    }
}
</script>

<style>

.contact {
    background: rgba(56, 0, 0, 0.6);
    font-family: 'Nunito', sans-serif;
    min-height: 100vh;
}

.social-section {
    background: rgba(16, 9, 11,0.5);
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.social-icons {
    padding-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    order: 1;
}

.social-icons i {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
}

.social-icons i:before {
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-property: color;
    transition-property: color;
}

.social-icons i:hover:before,
.social-icons i:focus:before,
.social-icons i:active:before {
    color: #0F9E5E;
}


.aframe {
    order: 3;
    margin-top: 3em;
}

@media(min-width: 900px) {

    .contact {
        max-height: 100vh;
    }
    .social-section {
        width: 78%;
        height: 612px;
        flex-direction: row;
        justify-content: space-between;
        margin: 4em auto;
    }

    .social-section i {
        margin: 0 50% 0;
    }
    
    .social-icons {
        align-self: space-around;
        margin-right: 2em;
        order: 3;
        flex-direction: column;
    }

    .social-icons i:last-child, .social-icons i:nth-child(2),
    .social-icons i:nth-child(3) {
        margin-top: 1em;
    }

    .aframe {
        order: 2;
        margin-top: auto;
    }
}


=======
<template id="contact-component-template">
        <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOut" >
    <div>
        <div class="contact">
        <section class="contact-section">
        <div class="form">
            <form action="index.html" method="post">
                    <h1>Contact Me</h1>
        
        <fieldset class='form'>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name">
          
          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email">
        </fieldset>
        
        <fieldset>   
          <label for="comment">Comments:</label>
          <textarea id="comment" name="comments"></textarea>
          <!--<label for="reason">Reason for contact:</label>
          <select id="job" name="contact_reason">
            <optgroup label="Reason for contact">
              <option value="business">Business</option>
              <option value="comment">Comment</option>
              <option value="to-say-hi">To say hi</option>
          </optgroup>
          </select>-->
        </fieldset>
        
        <button class="submit" >Submit</button>
      </form>
      </div>
        </section>
    </div>
</div>
        </transition>
</template>

<script>
export default {
            template:'#contact-component-template'
        }    
</script>

<style>
  
.contact {
    background: rgba(56, 0, 0, 0.6);
    font-family: 'Nunito', sans-serif;
}

.form, form {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 10px 20px;
  background: rgb(16, 9, 11);
  border-radius: 8px;
  color: ivory;
}



h1 {
  margin: 0 0 30px 0;
  text-align: center;
}

fieldset > label {
  background: inherit;
  color: ivory;
  text-weight: 400;
}

input[type="text"],
input[type="email"],
textarea,
select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: ivory;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.06) inset;
  margin-bottom: 30px;
}

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}

.submit {
  padding: 19px 39px 18px 39px;
  color: #FFF;
  background: #330066;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #330044;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
  margin-bottom: 10px;
}

  button:hover {
    background: #29E87F;
    color: #7C27E5;
    border: 1px solid #7E20CC;
  }

fieldset {
  margin-bottom: 30px;
  border: none;
  background: inherit;
}

legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  border-radius: 100%;
}

@media screen and (min-width: 480px) {

  form {
    max-width: 480px;
  }

}

>>>>>>> 38967afa685b3c455f08cea058724b50c0dbe634
</style>