<template>
  <section>
    <form class="form_card">
      <div class="left">
        <h3 class="left_title">Oración</h3>
        <textarea
          placeholder="ej. Amo a mi madre. ¿Te gusta el queso? ¡Muy buen servicio!"
          class="textbox"
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="form.sentences"
        />
        <button
          @click="validateAndAnalyze"
          class="button_style submit_btn"
          type="button"
        >
          Analizar
        </button>
      </div>

      <div class="right">
        <h3>Idioma</h3>

        <div>
          <button
            @click="setLanguage('es')"
            class="button_style"
            v-bind:class="{ active: isActiveEs, inactive: !isActiveEs }"
            type="button"
          >
            Español
          </button>
        </div>

        <div>
          <button
            @click="setLanguage('en')"
            class="button_style"
            v-bind:class="{ active: isActiveEn, inactive: !isActiveEn }"
            type="button"
          >
            English
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        sentences: null,
        language: 'es',
      },
      isActiveEs: true,
      isActiveEn: false
    };
  },
  methods: {
    ...mapActions({ analyzeSentences: "analyzeSentences" }),
    validateAndAnalyze() {
      if (this.form.sentences && this.form.language)
        this.analyzeSentences(this.form);
    },
    setLanguage(language) {
      if (language === 'en' && this.form.language === 'es') {
        this.isActiveEn = !this.isActiveEn
        this.isActiveEs = !this.isActiveEs
      } else if (language === 'es' && this.form.language === 'en')  {
        this.isActiveEs = !this.isActiveEs
        this.isActiveEn = !this.isActiveEn
      }

      this.form.language = language;
    },
  },
};
</script>

<style>
.form_card {
  width: 80%;
  height: 280px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  border: 1px solid #ddd6d6;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.left,
.right {
  display: flex;
  flex-direction: column;
}

.left {
  width: 60%;
}

.right {
  width: 30%;
}

.left_title {
  text-align: center;
}

.textbox {
  width: 80%;
  height: 50%;
  font-family: system-ui;
  padding: 0.6rem;
  align-self: center;
  background: #fffcfc;
  border: 1px solid #b6b4b4;
  box-sizing: border-box;
  border-radius: 8px;
}

.button_style {
  width: 60%;
  height: 40px;
  margin-top: 1rem;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.submit_btn {
  color: white;
  font-size: 1.1rem;
  background-color: #b280de;
  border: 1px solid #b280de;
  align-self: center;
}

.active {
  color: white;
  background-color: #b280de;
  border: 1px solid #b280de;
}

.inactive {
  color: #a86ddb7d;
  background-color: #ebe7ee2e;
  border: 1px solid #ebe7ee2e;
}

.checkbox {
  border: 1px solid #bcbcbc;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
</style>
