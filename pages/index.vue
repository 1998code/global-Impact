<template>
  <div class="container">
    <div>
      <h1 class="title">
         {{ $t('title') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('subtitle') }}
      </h2>
      
      <div class="links">
        <a
          href="https://github.com/1998code/global-Impact"
          target="_blank"
          class="button--grey m-3"
        >
          <fa icon="arrow-circle-left" />  GitHub <fa :icon="['fab', 'github-alt']" />
        </a>
        <router-link :to="localePath('start')" class="button--green">
          <fa icon="star" /> {{ $t('Get_Started') }} <fa icon="arrow-circle-right" />
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
  color: #000;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.dark-mode .subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.dark-mode .button--green {
  color: #00ffbf;
  border-color: #00ffbf;
  text-decoration: none;
}

.dark-mode .button--grey {
  color: #fff;
  border-color: #fff;
  text-decoration: none;
}

.dark-mode a {
  color: #00ffbf;
  text-decoration: none;
}
</style>
