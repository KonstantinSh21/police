<template>
  <div id="app">
    <div class="header">
      <div class="layout">
        <div class="header__wrap">
          <div class="header__img">
            <img src="https://static.mvd.ru/upload/site86/O6s7HzwJOI.png">
          </div>
          <div class="header__header">
            Отдел МВД России <br> по Пермскому району
          </div>
          <div class="header__phone">
            Всегда на связи<br>
            102
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <VueSlickCarousel class="slider" v-bind="settings">
        <div style="height: 500px;">
          <div class="slider-image">
            <img src="https://static.mvd.ru/upload/site1/document_news/MVD_9735-630xx225.jpg?rnd=0.8745904354806493">
          </div>
          <div class="slider-text">
            <div class="slider-text__header">
              9 мая на территории страны проходят праздничные мероприятия, посвящённые 77-й годовщине Победы в Великой
              Отечественной войне
            </div>
            <div class="slider-text__date">
              09 Мая 22:55
            </div>
            <div class="slider-text__subheader">
              В обеспечении общественного порядка задействовано около 160 тысяч сотрудников органов внутренних дел.
            </div>
          </div>
        </div>
        <div style="height: 500px;">
          <div class="slider-image">
            <img src="https://static.mvd.ru/upload/site86/document_news/I-630xx225.jpg?rnd=0.36355631662098453">
          </div>
          <div class="slider-text">
            <div class="slider-text__header">
              Житель Республики Башкортостан обвиняется в угоне
            </div>
            <div class="slider-text__date">
              05 Мая 11:30
            </div>
            <div class="slider-text__subheader">
              Полицейские нашли злоумышленника по шапке, которую он оставил в салоне автомобиля.
            </div>
          </div>
        </div>
        <div style="height: 500px;">
          <div class="slider-image">
            <img src="https://static.mvd.ru/upload/site86/document_news/DSC_0160_-630xx225.jpg?rnd=0.4676008174496997">
          </div>
          <div class="slider-text">
            <div class="slider-text__header">
              В Пермском крае участники конкурса детского творчества «Полицейский Дядя Степа» познакомились с гончарным
              промыслом
            </div>
            <div class="slider-text__date">
              29 Апреля 09:30
            </div>
            <div class="slider-text__subheader">
              После насыщенной и увлекательной экскурсии ребята изготовили глиняные поделки, посвященные сотрудникам
              правопорядка.
            </div>
          </div>
        </div>
        <div style="height: 500px;">
          <div class="slider-image">
            <img src="https://static.mvd.ru/upload/site86/document_news/4(11)-630xx225.jpg?rnd=0.7107678201616441">
          </div>
          <div class="slider-text">
            <div class="slider-text__header">
              В Куеде Пермского края общественница организовала для студентов посещение выставки «Предметы старины
              рассказать тебе должны»
            </div>
            <div class="slider-text__date">
              21 Апреля 09:30
            </div>
            <div class="slider-text__subheader">
              Ребята познакомились с предметами быта, кухонной утварью и внутренним убранством русской избы, вспомнили
              пословицы и поговорки, отгадали русские народные загадки.
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'App',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }
}
</script>

<style lang="scss" src="./assets/scss/layote.scss"></style>
