<template>
<div>
    <br />
      {{ $t('Select_Language') }}
      <nuxt-link
      v-if="$i18n.locale !== 'en'"
      :to="switchLocalePath('en')"
    >
      English
    </nuxt-link>
    <nuxt-link
      v-if="$i18n.locale !== 'zh-HK'"
      :to="switchLocalePath('zh-HK')"
    >
      中文(香港)
    </nuxt-link>
    <nuxt-link
      v-if="$i18n.locale !== 'zh-TW'"
      :to="switchLocalePath('zh-TW')"
    >
      中文(台灣)
    </nuxt-link>
    <br />
    <div class="m-3">{{ $t('Copyright') }}</div>
</div>
</template>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0px;
  width: 100%;
  color: white;
  text-align: center;
}
</style>