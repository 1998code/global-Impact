<template>
  <div class="container">
    <div>
      <h1 class="title">
       <logo /> {{ $t('mission') }}
      </h1>
      <h2 class="subtitle">
        <vue-typer
            :text="[$t('Goal1'), $t('Goal2'), $t('Goal3')]"
            :repeat='Infinity'
            :shuffle='true'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='1000'
            :erase-delay='100'
            erase-style='select-back'
            :erase-on-complete='false'
            caret-animation='smooth'
        ></vue-typer>
      </h2>

      <div class="links">
         <router-link :to="localePath('/')" class="button--grey">
          <fa icon="arrow-circle-left" /> {{ $t('Previous') }}
        </router-link>
        <router-link :to="localePath('/auth')" class="button--green">
          {{ $t('Continuous') }} <fa icon="arrow-circle-right" />
        </router-link>
        
        <br />
        <b-form-select v-model="$colorMode.preference" class="w-50 h-100 m-3">
            <option value="null">{{ $t('Please_Select_A_Color_Theme') }}</option>
            <option value="system">{{ $t('System') }}</option>
            <option value="light">{{ $t('Light') }}</option>
            <option value="dark">{{ $t('Dark') }}</option>
            <option value="sepia">{{ $t('Sepia') }}</option>
        </b-form-select>
      </div>
      
      <Footer />
    </div>
  </div>
     
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #000;
  letter-spacing: 1px;
}

.dark-mode .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

/* .vue-typer {
  font-family: monospace;
} */

.vue-typer .custom.char {
  color: #000;
}

.dark-mode .vue-typer .custom.char {
  color: #fff;
}

.vue-typer .custom.char.selected {
  background-color: #000;
}

.dark-mode .vue-typer .custom.char.selected {
  background-color: #fff;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #ddc019;
}

.links {
  padding-top: 15px;
}
</style>
