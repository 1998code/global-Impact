<template>
<div class="container">
    <b-row>
    <b-col>
    <!-- Card -->
    <b-card
    :title="$t('Network_Security')"
    img-src="~/static/list/hugo-information-security.svg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2, m-2"
    border-variant="success"
    >
    <b-card-text>
     {{ $t('Network_Security_intro') }}
    </b-card-text>
    <b-button href="#" variant="outline-success" class="w-100">{{ $t('Visit') }}{{ $t('OfficialWebsite') }}</b-button>
    </b-card>
    </b-col>
    <b-col>
    <!-- Card -->
    <b-card
    :title="$t('Health_Care')"
    img-src="~/static/list/hugo-animal-care.svg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2, m-2"
    border-variant="info"
    >
    <b-card-text>
        {{ $t('Health_Care_intro') }}
    </b-card-text>
    <b-button href="#" variant="info" class="w-100">{{ $t('Visit') }}{{ $t('OfficialWebsite') }}</b-button>
    </b-card>
    </b-col>
    <b-col>
    <!-- Card -->
    <b-card
    :title="$t('Weather')"
    img-src="~/static/list/hugo-location-access.svg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2, m-2"
    border-variant="primary"
    >
    <b-card-text>
        {{ $t('Weather_intro') }}
    </b-card-text>
    <b-button href="#" variant="outline-primary" class="w-100">{{ $t('Visit') }}{{ $t('OfficialWebsite') }}</b-button>
    </b-card>
    </b-col>
    </b-row>

    <b-row>
    <b-col>
    <!-- Card -->
    <b-card
    :title="$t('StoryBase')"
    img-src="~/static/list/hugo-searching.svg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2, m-2"
    border-variant="primary"
    >
    <b-card-text>
        {{ $t('StoryBase_intro') }}
    </b-card-text>
    <b-button href="https://storybase.now.sh" variant="primary" class="w-100 mb-2">{{ $t('Visit') }}{{ $t('OfficialWebsite') }}</b-button>
    <b-button href="https://biframe.now.sh" variant="primary" class="w-100">{{ $t('CallForAction') }}</b-button>
    </b-card>
    </b-col>
    <b-col>
    <!-- Card -->
    <b-card
    :title="$t('ComingSoon')"
    img-src="~/static/list/hugo-success.svg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2, m-2"
    border-variant="primary"
    >
    <b-card-text>
        {{ $t('LookForward') }}
    </b-card-text>
    <b-button href="#" variant="outline-primary" class="w-100">{{ $t('Visit') }}</b-button>
    </b-card>
    </b-col>
    <b-col>
    <!-- Card -->
    <b-card
    :title="$t('ComingSoon')"
    img-src="~/static/list/hugo-logged-out.svg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2, m-2"
    border-variant="primary"
    >
    <b-card-text>
        {{ $t('LookForward') }}
    </b-card-text>
    <b-button href="#" variant="outline-primary" class="w-100">{{ $t('Visit') }}</b-button>
    </b-card>
    </b-col>
    </b-row>

    <div class="links">
      <router-link :to="localePath('/auth')" class="button--grey">
      <fa icon="arrow-circle-left" /> {{ $t('Previous') }}
    </router-link>
      </div>
    <Footer />

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
  flex-direction: column;
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

.vue-typer {
  font-family: monospace;
}

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

.dark-mode .card-title {
  color: black
}

.dark-mode .card-text {
  color: black
}

</style>