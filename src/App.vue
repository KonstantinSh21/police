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
    <div class="nav">
      <div id="menu" class="row">
        <ul class="menu">
          <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking')"
              v-bind:class="{'open' : dropDowns.ranking.open}">
            <a class="menu__link menu__link--toggle" href="#">
              <span>Главная</span>
              <i class="menu__icon fa fa-angle-down"></i>
            </a>

            <ul class="dropdown-menu">
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Руководство</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Положение о ГУ МВД по Пермскому району</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Противодействие экстремизму и терроризму</a>
              </li>
            </ul>
          </li>

          <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking1')"
              v-bind:class="{'open' : dropDowns.ranking1.open}">
            <a class="menu__link menu__link--toggle" href="#">
              <span>Деятельность</span>
              <i class="menu__icon fa fa-angle-down"></i>
            </a>

            <ul class="dropdown-menu">
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Служба</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Документы</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Полезная информация</a>
              </li>
            </ul>
          </li>
          <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking2')"
              v-bind:class="{'open' : dropDowns.ranking2.open}">
            <a class="menu__link menu__link--toggle" href="#">
              <span>Для граждан</span>
              <i class="menu__icon fa fa-angle-down"></i>
            </a>

            <ul class="dropdown-menu">
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Прием обращений</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Порядок приема</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Регистрации разрешения заявлений о преступлениях</a>
              </li>
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Порядок и время приема граждан</a>
              </li>
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Государственные услуги</a>
              </li>
            </ul>
          </li>
          <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking3')"
              v-bind:class="{'open' : dropDowns.ranking3.open}">
            <a class="menu__link menu__link--toggle" href="#">
              <span>Контакты</span>
              <i class="menu__icon fa fa-angle-down"></i>
            </a>

            <ul class="dropdown-menu">
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Приемная</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Приемная</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Экстренный вызов</a>
              </li>
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Участковый уполномоченные полиции</a>
              </li>
              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Организации и учреждения</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
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
      <div class="footer">
        <div class="footer__text">
          Официальный сайт Отделa МВД России по Пермскому району © 2022, МВД России
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
      },
      dropDowns: {
        ranking: { open: false },
        ranking1: { open: false },
        ranking2: { open: false },
        ranking3: { open: false }
      }
    }
  },
  methods: {
    close: function () {
      this.dropDowns.forEach((item) => {
        // eslint-disable-next-line no-return-assign
        return item.open = false
      })
    },

    toggle: function (dropdownName) {
      this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open
    }
  },
  created: function () {
    var self = this
    window.addEventListener('click', function (e) {
      if (!e.target.parentNode.classList.contains('menu__link--toggle')) {
        self.close()
      }
    }, false)
  }
}
</script>

<style lang="scss" src="./assets/scss/layote.scss"></style>
