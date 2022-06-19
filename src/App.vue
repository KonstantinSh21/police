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
                <router-link :to="'/management'" class="dropdown-menu__link">Руководство</router-link>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link">Положение о ГУ МВД по Пермскому району</a>
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
                <router-link :to="'/info'" class="dropdown-menu__link" href="#">Полезная информация</router-link>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Служба</a>
              </li>

              <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Документы</a>
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
                <router-link :to="'/contact'"  class="dropdown-menu__link" href="#">Прием обращений</router-link>
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
                <router-link :to="'/reception'" class="dropdown-menu__link" href="#">Приемная</router-link>
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
    <router-view></router-view>
    <div class="footer">
      <div class="footer__text">
        Официальный сайт Отделa МВД России по Пермскому району © 2022, МВД России
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
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
