<template  id="form">
        <div class="form-con">
        <button class="form-show-btn hvr-bob" @click='toggleShow'>Contact me</button>
        <transition name="custom-classes-transition" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <slot v-if="!isShowing"></slot>
            <div v-else class="form">
                <form action="http://formspree.io/devcrvft@gmail.com" method="post">
                    <fieldset class='form'>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name">
                        
                        <label for="mail">Email:</label>
                        <input type="email" id="mail" name="email">
                    </fieldset>
                    
                    <fieldset>   
                        <label for="comment">Comments:</label>
                        <textarea id="comment" name="comments"></textarea>
                    </fieldset>
                    <button class="submit" >Submit</button>
                </form>
            </div>
            </transition>
        </div>
</template>

<script>
export default {
    template: '#form',
    data() {
        return {
            isShowing: false
        }
    },
        methods: {
        toggleShow() {
            this.isShowing = !this.isShowing;
            console.log("this is working")
        }
  }
}
</script>

<style>


.form-show-btn {
    padding: 19px 39px 18px 39px;
    color: #FFF;
    background: #330066;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    width: 310px;
    border: 1px solid #330044;
    border-width: 1px 1px 3px;
    margin-bottom: 20px;
    cursor: pointer;
    align-self: center;
}

    .form-con {
      align-self: center;
      margin-top: 1em;
      order: 2;
    }
    .form, form {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background: rgba(16, 9, 11,0.8);
  border-radius: 8px;
  color: ivory;

}

h1 {
  margin: 0 0 30px 0;
  text-align: center;
}

fieldset > label {
  color: ivory;
  text-weight: 400;
}

input[type="text"],
input[type="email"],
textarea {
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
  margin-bottom: 20px;
  resize: none;
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
  cursor: pointer;
}

fieldset {
  margin-bottom: 30px;
  border: none;
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



@media(min-width: 900px) {
  .form-con {
      order: 3;
    }
}

@media(min-width: 1550px) {
    .form-show-btn {
      width: 346px;
    }

    .form-con {
      align-self: flex-start;
      margin-left: 1em;
      order: 1;
    }
    
    .contact {
      flex-direction: column;
    }
}
</style>