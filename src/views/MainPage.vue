<template>
  <div>
    <div class="news">
      <VueSlickCarousel class="slider" v-bind="settings">
        <div class="slider-item">
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
        <div class="slider-item">
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
        <div class="slider-item">
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
      </VueSlickCarousel>
      <div class="layout">
        <div class="news-list">
          <div class="news-list__list">
            <div class="list__header">
              В Чусовом прошел «Смотр строя и песни»
            </div>
            <div class="list__subheader">
              Цель мероприятия – патриотическое воспитание подрастающего поколения.
            </div>
          </div>
          <div class="news-list__list">
            <div class="list__header">
              В Чусовом водителям, управляющим автомобилями в состоянии алкогольного опьянения, вынесены приговоры
            </div>
            <div class="list__subheader">
              Ранее мужчина и женщина уже подвергались административному наказанию за нетрезвое вождение.
            </div>
          </div>
          <div class="news-list__list">
            <div class="list__header">
              Житель Пермского края выразил благодарность госавтоинспекторам Краснокамска за помощь на дороге
            </div>
            <div class="list__subheader">
              Полицейские помогли мужчине поменять колесо на трассе.
            </div>
          </div>
          <div class="news-list__list">
            <div class="list__header">
              Госавтоинспекция Прикамья обратилась к мотоциклистам с открытием сезона
            </div>
            <div class="list__subheader">
              Полицейские напомнили байкерам о необходимости соблюдения Правил дорожного движения
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MainPage',
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

<style scoped>

</style>
